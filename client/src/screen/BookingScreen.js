import { View, Text, Platform, StatusBar, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import COLORS from '../constant/COLORS'
import { useNavigation } from '@react-navigation/native'

const BookingScreen = () => {
  const book = useSelector(state => state.book.booking)
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Bookings',
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
  return (
    <View>
      {book.length > 0 &&
        book.map(item => (
          <Pressable
            key={item.name}
            style={{
              backgroundColor: '#fff',
              margin: 10,
              padding: 10,
              borderRadius: 4
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '800' }}>{item.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                alignItems: 'center',
                marginTop: 5
              }}
            >
              <MaterialCommunityIcons
                name='star-circle'
                size={24}
                color='green'
              />
              <Text>{item.rating}</Text>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 5
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: '600', color: 'white' }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </Pressable>
        ))}

      {book.length === 0 && (
        <View
          style={{
            backgroundColor: '#fff',
            margin: 10,
            padding: 10,
            borderRadius: 4,
            // width: '100%',
            height: 300,
            justifyContent: 'center',
            elevation: 4
          }}
        >
          <Text
            style={{ textAlign: 'center', fontWeight: '600', fontSize: 15 }}
          >
            You have no booking any room.
          </Text>
        </View>
      )}
    </View>
  )
}

export default BookingScreen
