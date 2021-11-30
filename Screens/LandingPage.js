import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const LandingPage = ({navigation}) => (
    <ImageBackground source={require('../assets/landing.jpg')} resizeMode="cover" style={styles.image}>

        <View style={styles.container}>
           

            <Text style={styles.heading}>Welcome Shopie!</Text>

            <Text style={styles.text}>Order your fav items</Text>

            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Seller </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate("ShopNow")} style={styles.btn} >
                    <Text style={styles.btnText} > Buyer</Text>
                </TouchableOpacity>

            </View>

        </View>
    </ImageBackground>

);

const styles = StyleSheet.create({
    container: {

    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    heading: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",

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
        backgroundColor: '#4169E1',
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