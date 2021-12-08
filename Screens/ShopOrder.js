
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const ShopOrder = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("")
    const [uid, setUid] = useState("")
    const [products , setProducts] = useState([])


    const CheckUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {

                setUid(user.uid)
                setName(user.displayName)
                getDate(user.uid)
                console.log(name)
                // ...
            } else {

    
            }
        });
    }
    useEffect(() => {
        CheckUser()
    }, []);

    const getDate = (uid) => {
        console.log('user uid', uid)
          firebase.firestore().collection('orders').where('userUID', "==", uid).onSnapshot((querySnapshot) => {
                 setProducts([]);
                querySnapshot.forEach((doc) => {
                    setProducts(products => [...products, doc.data()]);

                // products.push(doc.data())
                console.log(doc.data)
                console.log("products" , products)
                  
            });
        });
    }
 


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.text}>{name}</Text>

                </View>


                <View style={styles.container}>

                    {
                        products.map((item, Index) => {
                            return (
                                <Card style={styles.MainContainer} key={Index}>
                                    <Card.Cover style={styles.cardimage} source={{ uri: item.image }} />
                                    <Card.Content >
                                        <View style={styles.TitleContainer}>
                                            <Title style={styles.title}>{item.title}</Title>
                                        </View>
                                        <Paragraph style={styles.description}><Text style={styles.Property}>Order by: </Text>{item.name}</Paragraph>
                                        <Paragraph style={styles.description}><Text style={styles.Property}>num:  </Text>{item.num}</Paragraph>
                                        <Paragraph style={styles.price}><Text style={styles.Property}>Total amount: </Text>${item.price} </Paragraph>


                                    </Card.Content>


                                </Card>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ShopOrder;

const styles = StyleSheet.create({
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
    MainContainer: {
        width: 150,
        height: "auto",
        margin: 15
    },
    TitleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    title: {
        fontSize: 15,
        textTransform: "uppercase",

    },
    price: {
        // color: "#08abf4"
    },
    description: {
        fontSize: 15,
        textTransform: "capitalize"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        height: "100%"
    },
    cardimage: {
        width: 150,
        height: 100,
    },
    btn: {
        color: "yellow"
    },
    Property:{
        color: "#08abf4"
    }
})