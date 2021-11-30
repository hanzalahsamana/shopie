import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Cards = ({ }) => {

    const ShopCard = [
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Diamond",
           
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
           
        },
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Imtiaz",
           
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
           
        },
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Diamond",
           
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
           
        },
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Imtiaz",
           
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
           
        },
    ]

    const navigation = useNavigation();
    return (
    
              <ScrollView>
            <View style={styles.container}>
                {
                    ShopCard.map((item, Index) => {
                        return (
                            <Card style={styles.picture} key={Index}>
                                <Card.Cover style={styles.cardimage} source={{uri: item.image}} />
                                <Card.Content style={styles.centre}>
                                    <Title>{item.title}</Title>
                                </Card.Content>
                                <Card.Actions style={styles.centre}>
                                    <Button color="#4169E1" onPress={() => navigation.navigate("ShopProfile")}>Sell</Button>
                                </Card.Actions>
                            </Card>
                        )
                    })
                }
            </View>
            </ScrollView>
          

    );

}

export default Cards;

const styles = StyleSheet.create({
    picture: {
        width: 150,
        height: "auto",
        margin: 15
    },


    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:"wrap"

    },
    cardimage: {
        width: 150,
        height: 100,
    },
    centre: {
        alignItems: 'center',
        justifyContent: 'center',
    },


});

// style={styles.picture}