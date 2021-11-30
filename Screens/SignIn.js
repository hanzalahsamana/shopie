
import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image
                    style={styles.Image}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
            </View>


            <Text style={styles.Headings}>Welcome to Shopie!</Text>

            <View style={styles.Form}>
                
                <View style={styles.feilds}>
                    <Input
                        style={styles.input}
                        placeholder='ENTER YOUR EMAIL '
                        leftIcon={
                            <Icon
                                style={styles.icon}

                                name='envelope'
                                size={16}
                                color='#08abf4'
                            />

                        }

                    />
                </View>
                <View style={styles.feilds}>
                    <Input
                        style={styles.input}
                        placeholder='ENTER YOUR PASSWORD'
                        leftIcon={
                            <Icon
                                style={styles.icon}

                                name='lock'
                                size={24}
                                color='#08abf4'
                            />

                        }

                    />
                </View>

            </View>
            <View style={styles.ForgetPasswordContainer}>
                <Text style={styles.ForgetPassword}>Forget your password? </Text>
            </View>
            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.btnText} onPress={() => navigation.navigate("SellerDashboard")}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.redirect}>Don't have an account ? <Text style={styles.redirectLink} onPress={() => navigation.navigate("SignUp") }>Sign Up</Text></Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

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
        lineHeight: 50
    },

    Form: {
        width: "100%",
        height: 150,
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
       width:350
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
        width: 300,
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
    }


});
