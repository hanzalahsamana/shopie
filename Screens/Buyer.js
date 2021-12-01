import React, { useState, useEffect } from 'react';
import Cards from './card';
import firebase from 'firebase';
import { View, StyleSheet , ScrollView  , SafeAreaView} from 'react-native';

const Buyer = () => {

    const [sellers, setSellers] = useState([])


   
    useEffect(() => {
        getDate()
    }, []);

    const getDate = () => {
        // console.log('user uid', uid)
        firebase.firestore().collection('users').get().then((onSnapshot) => {
            setSellers([]);
            onSnapshot.forEach((doc) => {
                setSellers(sellers => [...sellers, doc.data()]);
                console.log(doc.data())
                // console.log("products", products)

            });
        });
    }


    return (
        // <SafeAreaView style={styles.container}>
            <View  style={styles.container}>
                {
                    sellers.map((item, index) => {

                        return (
                            <View key={index}>
                                <Cards name={item.name} uid={item.userUID}/>
                            </View>
                        )
                    })
                }
            </View>
        // </SafeAreaView >


    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

    },


});
export default Buyer;