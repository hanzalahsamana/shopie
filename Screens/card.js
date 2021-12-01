import React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const Cards = (props) => {
    const { name, uid } = props;
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

    container: {
        flex: 1,
        justifyContent:"center",

    },
    picture: {
        width: 150,
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