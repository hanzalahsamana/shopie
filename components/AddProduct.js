
import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AddImage from './ImagePicker';




export default function AddProduct() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.Form}>
                <View style={styles.feilds}>
                    <Input
                        style={styles.input}
                        placeholder='ENTER PRODUCT TITLE'
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
                <AddImage />
            </View>

            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.btnText} onPress={() => navigation.navigate("SellerDashboard")}>
                        Add
                    </Text>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
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
    AddImage:{
        marginBottom:20
    }


});


