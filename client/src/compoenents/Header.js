import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import COLORS from '../constant/COLORS'
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 60,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 25,
          padding: 6
        }}
      >
        <Ionicons name='bed-outline' size={24} color='white' />
        <Text style={{ color: 'white', marginLeft: 5 }}>Stays</Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Ionicons name='airplane-outline' size={24} color='white' />
        <Text style={{ color: 'white', marginLeft: 5 }}>Flights</Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <AntDesign name='car' size={24} color='white' />
        <Text style={{ color: 'white', marginLeft: 5 }}>Car Rental</Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <FontAwesome5 name='uber' size={24} color='white' />
        <Text style={{ color: 'white', marginLeft: 5 }}>Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header
