
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderNow() {

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [num, setNum] = useState('');
    const [address, setAddress] = useState('');
    const [data, setData] = useState('');

    const navigation = useNavigation();

    const getData = async () => {

        try {
          const jsonValue = await AsyncStorage.getItem('ProductData')
          setData(JSON.parse(jsonValue))

         
        } catch(e) {
          // error reading value
        }

      }
      
    useEffect(() => {
        getData()
        
    }, []);

    console.log("aya" , data)

    const Order = () => {
        if (name === " " || details === " " || num === " " || address === "") {
            Alert.alert("Error", "please fill all the feild")
        } else {
            firebase.firestore().collection('orders').add({
                name,
                details,
                num,
                address,
                userUID: data?.userUID,
                title: data?.title,
                image: data?.image,
                price: data?.price,
                details: data?.details,
                key: data?.productKey,

                // userUID: uid
            })
                .then(() => {
                    console.log("Document successfully written!");
                    alert("order has been placed successfully!!")
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                    alert("error", error)

                });



            // We're done with the blob, close and release it
            setName('');
            setDetails('');
            setAddress('')
            setNum('')

        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.Productcontainer}>

                    <View style={styles.Form}>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR NAME'
                                value={name}
                                onChangeText={(text) => setName(text)}

                                leftIcon={
                                    <Icon
                                        style={styles.icon}
                                        name='user'
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
                                placeholder='ENTER YOUR PHONE NUMBER'
                                value={num}
                                onChangeText={(text) => setNum(text)}
                                leftIcon={
                                    <Icon
                                        style={styles.icon}
                                        name='phone'
                                        size={20}
                                        color='#08abf4'
                                    />

                                }

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR ADDRESS'
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                                leftIcon={
                                    <Icon
                                        style={styles.icon}
                                        name='home'
                                        size={20}
                                        color='#08abf4'
                                    />

                                }

                            />
                        </View>
                    </View>


                    <View style={styles.btnContainer}>

                        <TouchableOpacity style={styles.btn} onPress={Order}>
                            <Text style={styles.btnText} >
                                Order Now
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
        height: 300,
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


    btnContainer: {
        width: '100%',
        alignItems: 'center',
        maxHeight: 100,
    },

    btn: {
        flex: 1,
        width: 200,
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


