import { UpdateEventType } from 'expo-updates';
import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from 'react-native-elements';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { ceil } from 'react-native-reanimated';
import Cards from './card';

const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');
const ShopProfile = () => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.text}>Header</Text>
            </View>
            <View style={styles.container}>
                <Card style={styles.picture}>
                    <Card.Cover style={styles.cardimage} source={{ uri: 'https://i.picsum.photos/id/558/700/700.jpg?hmac=9BsnzhVewVpZGiQgZOEmypsxcAA6duN_vFlZWaLN1I4' }} />
                    <Card.Content >
                        <Title>Watch</Title>
                        <Paragraph>Desciption ha ye..</Paragraph>
                        <Paragraph>10$</Paragraph>
                    </Card.Content>
                    <Card.Actions >
                        <Button onPress={() => navigation.navigate("ShopProfile")}>Buy Now</Button>
                    </Card.Actions>
                </Card>

                <Card style={styles.picture}>
                    <Card.Cover style={styles.cardimage} source={{ uri: 'https://i.picsum.photos/id/558/700/700.jpg?hmac=9BsnzhVewVpZGiQgZOEmypsxcAA6duN_vFlZWaLN1I4' }} />
                    <Card.Content >
                        <Title>Cups</Title>
                        <Paragraph>Desciption ha ye..</Paragraph>
                        <Paragraph>10$</Paragraph>
                    </Card.Content>
                    <Card.Actions >
                        <Button onPress={() => navigation.navigate("ShopProfile")}>Buy Now</Button>
                    </Card.Actions>
                </Card>
            </View>
        </>
    );
}
export default ShopProfile;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#2a9df4',
        alignItems: 'center',
        height: 50,
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 25,
    },
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

})