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
            <Cards/>
            <Cards/>
        </>
    );
}
export default ShopProfile;

const styles = StyleSheet.create({
    header: {
        width:'100%',
        justifyContent:'center',
        backgroundColor: '#2a9df4',
        alignItems:'center',
        height: 50,
    },
    text: {
        justifyContent:'center',
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