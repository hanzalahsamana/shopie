
import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';


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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

