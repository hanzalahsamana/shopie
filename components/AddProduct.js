
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase"
import * as ImagePicker from 'expo-image-picker';


export default function AddProduct() {


    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState('');
    const [uid, setUid] = useState("")
    // const [storage, setStorage] = useState("")

    const [image, setImage] = useState(null);
    console.log("image", image)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            // mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);


        if (!result.cancelled) {
            setImage(result);
        }
    };
    async function uploadImageAsync(uri) {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const fileRef = ref(getStorage(), uuid.v4());
        const result = await uploadBytes(fileRef, blob);

        // We're done with the blob, close and release it
        blob.close();

        return await getDownloadURL(fileRef);
    }

    const CheckUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {

                setUid(user.uid)
                // ...
            } else {

                // User is signed out
                // ...
            }
        });
    }
    useEffect(() => {
        CheckUser()
    }, []);
    // storage = firebase.storage();

    const Products = async (e) => {

        // console.log('title', title)
        // console.log('details', details)
        console.log("image 234", image)
        // return;



        const response = await fetch(image.uri);
        const blob = await response.blob();

        // return;
        firebase.storage().ref().child(`images/${uid}/${title}`)
            .put(blob).then((snap) => {

                snap.ref.getDownloadURL().then((url) => {
                    console.log('url', url)
                    firebase.firestore().collection('users').doc(uid).collection('products').add({
                        title,
                        details,
                        price,
                        image: url,
                        userUID: uid
                    })
                        .then(() => {
                            console.log("Document successfully written!");
                            alert("Product add")
                        })
                        .catch((error) => {
                            console.error("Error writing document: ", error);
                        });

                }).catch(error => console.log('DownloadURL error', error))

            }).catch(error => console.log('Image couldnt upload', error))
        // We're done with the blob, close and release it
        setTitle('');
        setDetails('');
        setPrice('')

    }
    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.Productcontainer}>

                    <View style={styles.Form}>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER PRODUCT TITLE'
                                value={title}
                                onChangeText={(text) => setTitle(text)}

                                leftIcon={
                                    <Icon
                                        style={styles.icon}
                                        name='text-width'
                                        size={16}
                                        color='#08abf4'
                                    />

                                }

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER PRODUCT DETAILS '
                                value={details}
                                onChangeText={(text) => setDetails(text)}
                                leftIcon={
                                    <Icon
                                        style={styles.icon}
                                        name='text-width'
                                        size={16}
                                        color='#08abf4'
                                    />

                                }

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER PRODUCT PRICE'
                                value={price}
                                onChangeText={(text) => setPrice(text)}
                                leftIcon={
                                    <Icon
                                        style={styles.icon}
                                        name='dollar'
                                        size={24}
                                        color='#08abf4'
                                    />

                                }

                            />
                        </View>

                    </View>
                    <View style={styles.AddImage}>
                        <View >
                            <View style={styles.ImagebtnContainer}>

                                <TouchableOpacity style={styles.Imagebtn} onPress={pickImage}>
                                    <Text style={styles.ImageText} >
                                        ADD IMAGE
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            {image && <Image source={{ uri: image.uri }} style={{ width: 100, height: 100 }} />}
                        </View>
                    </View>

                    <View style={styles.btnContainer}>

                        <TouchableOpacity style={styles.btn} onPress={Products}>
                            <Text style={styles.btnText}>
                                Add
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: "100%"
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    Productcontainer: {
        height: Dimensions.get('window').height / 1.2,
        alignItems: "center",
        justifyContent: 'center'
    },
    ImageContainer: {
        height: 100,
        width: "100%"

    },
    Image: {
        height: "100%",
        width: "100%",
        borderRadius: 20

    },
    Headings: {
        color: "#08abf4",
        fontSize: 20,
        lineHeight: 50,
        marginBottom: 20
    },

    Form: {
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",

    },
    feilds: {
        width: 320,
    },
    input: {
        fontSize: 15,
    },
    icon: {
        marginRight: 10
    },
    ForgetPasswordContainer: {
        width: 350
    },
    ForgetPassword: {
        textAlign: "right",
        color: "#08abf4",
        marginBottom: 30,
        marginRight: 30
    },

    btnContainer: {
        width: '100%',
        alignItems: 'center',
        maxHeight: 80,
    },

    btn: {
        flex: 1,
        width: 100,
        backgroundColor: '#08abf4',
        height: 50,
        maxHeight: 50,
        lineHeight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginBottom: 20

    },
    btnText: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 3,
        textTransform: "uppercase"
    },
    redirect: {
        fontSize: 15,
        color: "gray"
    },
    redirectLink: {
        color: "#08abf4"
    },
    AddImage: {
        marginBottom: 20
    },
    ImagebtnContainer: {
        width: '100%',
        alignItems: 'center',
        maxHeight: 80,
    },

    Imagebtn: {
        flex: 1,
        width: 300,
        backgroundColor: 'white',
        height: 50,
        maxHeight: 50,
        lineHeight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginBottom: 20,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#08abf4"

    },
    ImageText: {
        color: '#08abf4',
        fontSize: 20,
        letterSpacing: 3,
        textTransform: "uppercase"
    },


});


