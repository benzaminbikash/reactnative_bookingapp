import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen'
import Booking from '../screen/BookingScreen'
import SavedScreen from '../screen/SavedScreen'
import ProfileScreen from '../screen/ProfileScreen'
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import BookingScreen from '../screen/BookingScreen'
import { NavigationContainer } from '@react-navigation/native'
import SearchScreen from '../screen/SearchScreen'
import PlaceScreen from '../screen/PlaceScreen'
import MapScreen from '../screen/MapScreen'
import PropertyScreen from '../screen/PropertyScreen'
import RoomScreen from '../screen/RoomScreen'
import UserScreen from '../screen/UserScreen'
import ConfirmScreen from '../screen/ConfirmScreen'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  function BottomTap () {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name='md-home-sharp' size={24} color='#4c65b0' />
              ) : (
                <Ionicons name='md-home-outline' size={24} color='black' />
              )
          }}
        />
        <Tab.Screen
          name='Saved'
          component={SavedScreen}
          options={{
            tabBarLabel: 'Save',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name='heart' size={24} color='#4c65b0' />
              ) : (
                <AntDesign name='hearto' size={24} color='black' />
              )
          }}
        />
        <Tab.Screen
          name='Bookings'
          component={BookingScreen}
          options={{
            headerTitleAlign: 'center',

            tabBarLabel: 'Booking',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name='notifications-sharp'
                  size={24}
                  color='#4c65b0'
                />
              ) : (
                <Ionicons
                  name='notifications-outline'
                  size={24}
                  color='black'
                />
              )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name='user-alt' size={24} color='#4c65b0' />
              ) : (
                <FontAwesome5 name='user' size={24} color='black' />
              )
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}
      >
        <Stack.Screen name='main' component={BottomTap} />
        <Stack.Screen name='search' component={SearchScreen} />
        <Stack.Screen
          name='place'
          component={PlaceScreen}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='map' component={MapScreen} />
        <Stack.Screen
          name='property'
          component={PropertyScreen}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='room'
          component={RoomScreen}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='user'
          component={UserScreen}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='confirm'
          component={ConfirmScreen}
          options={{
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
