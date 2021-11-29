
import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="landingPage" component={LandingPage}
      options={{
        headerShown:false
      }}
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

