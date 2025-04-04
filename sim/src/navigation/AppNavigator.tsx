import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Shop" 
      component={HomeStack} 
      options={{ tabBarIcon: ({ color }) => <Ionicons name="storefront" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Cart" 
      component={CartScreen} 
      options={{ tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default AppNavigator;
