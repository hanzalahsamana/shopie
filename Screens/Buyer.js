import React, { useState, useEffect } from 'react';
import Cards from './card';
import firebase from 'firebase';
import {  Button } from 'react-native-paper';

import { View, StyleSheet , Text  ,  SafeAreaView ,BackHandler} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Buyer = () => {

    const [sellers, setSellers] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      },[]);

   
    useEffect(() => {
        getDate()
    }, []);

    const getDate = () => {
        // console.log('user uid', uid)
        firebase.firestore().collection('seller').get().then((onSnapshot) => {
            setSellers([]);
            onSnapshot.forEach((doc) => {
                setSellers(sellers => [...sellers, doc.data()]);
                console.log(doc.data())
                // console.log("products", products)

            });
        });

      
        }
        const LogOut = () => {

            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                navigation.navigate("landingPage")
    
            }).catch((error) => {
                // An error happened.
                console.log("erroe", error)
            })

        }
    


    return (
        <SafeAreaView style={styles.container}>
                            <View style={styles.header}>
                    <Text style={styles.text}>Shop Now</Text>

                    <Button mode="outlined" onPress={LogOut} color="tomato" style={{ borderColor: "tomato" }}>
                        Log Out
                    </Button>




                </View>
            <View  style={styles.Cardcontainer}>
        
                {
                    sellers.map((item, index) => {

                        return (
                            <View key={index}>
                                <Cards name={item.name} uid={item.userUID} />
                            </View>
                        )
                    })
                }
            </View>
        </SafeAreaView >


    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#08abf4',
        alignItems: 'center',
        height: 200,
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        letterSpacing: 5,
        textTransform: "uppercase"

    },
    Cardcontainer : {
        // height: 500
        flex: 1,
        flexDirection: 'row',

    }

});
export default Buyer;