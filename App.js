
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
import firebase from 'firebase';
import StoreProducts from './Screens/storeProducts';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCuyMJTvc1f1HNC24PZfmOPwBgEgEgc3Xg",
  authDomain: "shopie-b14d2.firebaseapp.com",
  projectId: "shopie-b14d2",
  storageBucket: "shopie-b14d2.appspot.com",
  messagingSenderId: "482107165171",
  appId: "1:482107165171:web:2374e0bf97109833c46a86"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


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
         <Stack.Screen name="StoreProducts" component={StoreProducts} />

      <Stack.Screen name="ShopProfile" component={ShopProfile} 
       options={{
        headerShown: false
      }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

