
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import firebase from 'firebase';

import { useNavigation } from '@react-navigation/native';


const StoreProducts = (props) => {
    const { userUid , name} = props.route.params
    console.log('params', userUid);
    const [products, setProducts] = useState([])
    const navigation = useNavigation();

    const getDate = () => {
   if(userUid){
    console.log('user uid', userUid)
    firebase.firestore().collection('seller').doc(userUid).collection('products').onSnapshot((querySnapshot) => {
        setProducts([]);
        querySnapshot.forEach((doc) => {
            setProducts(products => [...products, doc.data()]);

            // products.push(doc.data())
            console.log(doc.data)
            console.log("products", products)

        });
    });
   }
    }


    useEffect(() => {
        getDate()
    }, []);

    return (
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
                                        <Paragraph style={styles.price}>${item.price}</Paragraph>
                                    </View>
                                    <Paragraph style={styles.description}>{item.details}</Paragraph>
                                </Card.Content>


                                <Card.Actions >
                                    <Button color="#08abf4" onPress={() => navigation.navigate("OrderNow") }>Buy now</Button>
                                </Card.Actions>
                            </Card>
                        )
                    })
                }

            </View>
        </ScrollView>

    );
}
export default StoreProducts;

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
        justifyContent: "space-between",
        alignItems: "center",

    },
    title: {
        fontSize: 15,
        textTransform: "uppercase",

    },
    price: {
        color: "#08abf4"
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
    }
})