
import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import Buyer from './Screens/Buyer';
import ShopProfile from './Screens/profileshop';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="landingPage" component={LandingPage}options={{headerShown:false}}/>
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="ShopProfile" component={ShopProfile} />
    </Stack.Navigator>

    </NavigationContainer>
  );
}

