import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
// const image = { uri: require('../assets/landing.jpg') };

function LandingPage() {
    const navigation = useNavigation();

    return(
        <ImageBackground source={require('../assets/landing.jpg')} resizeMode="cover" style={styles.image}>

        <View style={styles.container}>

        <View style={styles.ImageContainer}>
                <Image
                    style={styles.LogoImage}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.heading}>Welcome to Shopie!</Text>

            <Text style={styles.text}>Order your fav items</Text>

            <View style={styles.btnContainer}>
               
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SignUp") }>
                    <Text style={styles.btnText}>
                        Sell
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("ShopNow") } >
                    <Text style={styles.btnText}>
                        Buy
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    </ImageBackground>
    )
}
    

const styles = StyleSheet.create({
    container: {

    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    ImageContainer:{
        height: 70,
        width:"100%"
        
    },
    LogoImage:{
        height:"100%",
        width:"100%",
        borderRadius: 20
        
    },
    heading: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20

    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 100
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
});

export default LandingPage;