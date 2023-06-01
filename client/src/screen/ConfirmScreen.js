import { View, Text, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../constant/COLORS'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { addBooking } from '../redux/SaveBookSlice'
import { useDispatch } from 'react-redux'

const ConfirmScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  console.log(route.params)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: COLORS.primary,
        // height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent'
      }
    })
  }, [])
  const dispatch = useDispatch()
  const bookingData = {
    children: route.params.children,
    room: route.params.room,
    adults: route.params.adults,
    name: route.params.name,
    oldPrice: route.params.oldPrice,
    newPrice: route.params.newPrice,
    rating: route.params.rating,
    startDate: route.params.startDate,
    endDate: route.params.endDate
  }
  const confirmBooking = () => {
    dispatch(addBooking(bookingData))
    navigation.replace('main')
  }
  return (
    <View style={{ margin: 10 }}>
      <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
        <Text style={{ marginTop: 5, fontSize: 16, fontWeight: '900' }}>
          {route.params.name}
        </Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center'
          }}
        >
          <MaterialCommunityIcons name='star-circle' size={24} color='green' />
          <Text> {route.params.rating}</Text>
          <View
            style={{
              backgroundColor: COLORS.primary,
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderRadius: 4
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '400'
              }}
            >
              Genius Level
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 15, marginTop: 5 }}>
          <View>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
              Check In
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >
              {route.params.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
              Check Out
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >
              {route.params.endDate}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text>Rooms and Guests</Text>
          <Text
            style={{ fontSize: 15, color: COLORS.primary, fontWeight: '500' }}
          >
            {route.params.room} rooms {route.params.adults} adults{' '}
            {route.params.children} children
          </Text>
        </View>
        <Pressable
          onPress={() => confirmBooking()}
          style={{
            backgroundColor: COLORS.primary,
            width: 100,
            padding: 5,
            marginTop: 6,
            borderRadius: 5
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: '700'
            }}
          >
            Book Now
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ConfirmScreen
