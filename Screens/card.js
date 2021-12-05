import React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Card, Title ,Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const Cards = (props) => {
    const { name, uid , LogOut} = props;
    console.log('name', name)
    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
    
                <View >
                    <View>
                        <Card style={styles.picture}>
                            <Card.Cover style={styles.cardimage} source={require('../assets/logo.png')} />
                            <Card.Content style={styles.centre}>
                                <Title style={{ textTransform: "uppercase", fontSize: 15 }}>{name}</Title>
                            </Card.Content>
                            <Card.Actions style={styles.centre}>
                                <Button color="#08abf4" onPress={() => navigation.navigate("StoreProducts", { userUid: uid, name: name })}>Shop Now</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );

}

export default Cards;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#08abf4',
        alignItems: 'center',
        height: 100,
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        letterSpacing: 5,
        textTransform: "uppercase"

    },

    container: {
        flex: 1,
        justifyContent:"center",

    },
    picture: {
        height: "auto",
        margin: 15,
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