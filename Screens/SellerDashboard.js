import * as React from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddProduct from '../components/AddProduct';
import ShopProfile from './profileshop';
import { Icon } from 'react-native-elements';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddProduct />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View >
      <ShopProfile profile = {true} 

         
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function SellerDashboard() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Add Product" component={HomeScreen}
        
        options={{  
          tabBarIcon: () => (
            <Icon
              name='add'
              color="#08abf4"
              size={28}
            />
          )
        }}
        />
        <Tab.Screen name="Your Product" component={SettingsScreen} 
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon
                  name='home'
                  color="#08abf4"
                  size={28}
                />
              )
            }}
        />
      </Tab.Navigator>
 
  );
}