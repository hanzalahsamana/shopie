import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Cards = ({}) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <Card style={styles.picture}>
                    <Card.Cover style={styles.cardimage} source={{ uri: 'https://i.picsum.photos/id/558/700/700.jpg?hmac=9BsnzhVewVpZGiQgZOEmypsxcAA6duN_vFlZWaLN1I4' }} />
                    <Card.Content >
                        <Title>Title</Title>
                        <Paragraph>Discription</Paragraph>
                        <Text>Price</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate("ShopProfile")}>Sell</Button>
                    </Card.Actions>
                </Card>

                <Card style={styles.picture}>
                    <Card.Cover style={styles.cardimage} source={{ uri: 'https://i.picsum.photos/id/558/700/700.jpg?hmac=9BsnzhVewVpZGiQgZOEmypsxcAA6duN_vFlZWaLN1I4' }} />
                    <Card.Content >
                    <Title>Title</Title>
                    <Paragraph>Discription</Paragraph>
                    <Text>Price</Text>
                    </Card.Content>
                    <Card.Actions >
                        <Button onPress={() => navigation.navigate("ShopProfile")}>Sell</Button>
                    </Card.Actions>
                </Card>
            </View>
        </>
    );

}

export default Cards;

const styles = StyleSheet.create({
    picture: {
        width: 150,
        height: 270,
        margin: 15
    },


    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-around',
    },
    cardimage: {
        width: 150,
        height: 150,
    },


});

// style={styles.picture}