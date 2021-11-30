
import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import SellerDashboard from './Screens/SellerDashboard';
import Buyer from './Screens/Buyer';
import ShopProfile from './Screens/profileshop';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="landingPage" component={LandingPage}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen name="SignUp" component={SignUp}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            headerShown: false
          }}

        />

        <Stack.Screen name="SellerDashboard" component={SellerDashboard}
          options={{
            headerShown: false
          }}

        />
         <Stack.Screen name="ShopNow" component={Buyer} />
      <Stack.Screen name="ShopProfile" component={ShopProfile} 
       options={{
        headerShown: false
      }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

