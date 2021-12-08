import * as React from 'react';
import { BackHandler, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddProduct from '../components/AddProduct';
import ShopProfile from './profileshop';
import { useEffect } from 'react'
import { Icon } from 'react-native-elements';
import ShopOrder from './ShopOrder';


function HomeScreen() {
  return (
    <View >
      <ShopProfile profile={true}


      />
    </View>
  );
}

function AddScreen() {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddProduct />
    </View>
  );
}

function OrderScreen() {
  return (

    <View>
      <ShopOrder />
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function SellerDashboard() {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, []);

  return (

    <Tab.Navigator>
      <Tab.Screen name="Your Product" component={HomeScreen}

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

      <Tab.Screen name="Your Order" component={OrderScreen}

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

      <Tab.Screen name="Add Product" component={AddScreen}
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
    </Tab.Navigator>

  );
}