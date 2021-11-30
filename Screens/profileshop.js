
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const ShopProfile = () => {

    const ShopCard = [
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Diamond",
            Price: "200",
            description: "best quality in the world"

        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
            Price: "200",
            description: "best quality in the world"
        },
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Imtiaz",
            Price: "200",
            description: "best quality in the world"
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
            Price: "200",
            description: "best quality in the world"
        },
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Diamond",
            Price: "200",
            description: "best quality in the world"
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
            Price: "200",
            description: "best quality in the world"
        },
        {
            image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Imtiaz",
            Price: "200",
            description: "best quality in the world"
        },
        {
            image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Chase Up",
            Price: "200",
            description: "best quality in the world"
        },
    ]

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.text}>Imtiaz</Text>
                </View>

                <View style={styles.container}>

                    {
                        ShopCard.map((item, Index) => {
                            return (
                                <Card style={styles.MainContainer} key={Index}>
                                    <Card.Cover style={styles.cardimage} source={{ uri: item.image }} />
                                    <Card.Content >
                                        <View style={styles.TitleContainer}>
                                            <Title style={styles.title}>{item.title}</Title>
                                            <Paragraph style={styles.price}>${item.Price}</Paragraph>
                                        </View>
                                        <Paragraph style={styles.description}>{item.description}</Paragraph>
                                    </Card.Content>
                                    <Card.Actions >
                                        <Button color="#4169E1" >Buy now</Button>
                                    </Card.Actions>
                                </Card>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ShopProfile;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#4169E1',
        alignItems: 'center',
        height: 200,
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        letterSpacing:5,
        textTransform:"uppercase"

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
     fontSize:15,
     textTransform:"uppercase",
  
    },
    price:{
    color:"#4169E1"
    },
    description:{
     fontSize:15,
     textTransform:"capitalize"
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
    btn:{
        color:"yellow"
    }
})