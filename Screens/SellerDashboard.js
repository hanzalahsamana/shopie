import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddProduct from '../components/AddProduct';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddProduct />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Product!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function SellerDashboard() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Add Product" component={HomeScreen} />
        <Tab.Screen name="Your Product" component={SettingsScreen} />
      </Tab.Navigator>
 
  );
}