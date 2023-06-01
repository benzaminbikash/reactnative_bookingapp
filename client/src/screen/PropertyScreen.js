import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Pressable
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../constant/COLORS'
import { pixelImage } from '../constant/imageResponsive'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Service from '../compoenents/Service'

const PropertyScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  console.log(route.params)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.info.name}`,
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: COLORS.primary,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent'
      }
    })
  }, [])
  const differnce = route.params.info.oldPrice - route.params.info.newPrice
  const offerPrice = (Math.abs(differnce) / route.params.info.oldPrice) * 100
  return (
    <View>
      <ScrollView>
        <Pressable
          style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}
        >
          {route.params?.info.photos.slice(0, 5).map((item, index) => (
            <View style={{ margin: 2 }}>
              <Image
                key={index}
                source={{ uri: item.image }}
                style={{
                  width: 120,
                  height: pixelImage(80),
                  borderRadius: pixelImage(4)
                }}
              />
            </View>
          ))}
          <Pressable style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', marginLeft: 20 }}>
              Show More
            </Text>
          </Pressable>
        </Pressable>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '800' }}>
              {route.params.info.name}
            </Text>
            <View style={{ flexDirection: 'row', gap: 5, marginTop: 3 }}>
              <MaterialCommunityIcons
                name='star-circle'
                size={24}
                color='green'
              />
              <Text>{route.params.info.rating}</Text>
              <Pressable
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 3,
                  borderRadius: 4
                }}
              >
                <Text style={{ color: 'white', fontWeight: '500' }}>
                  Genius Level
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{ backgroundColor: 'green', padding: 3, borderRadius: 4 }}
          >
            <Text style={{ color: 'white' }}>Travel sustainable</Text>
          </View>
        </View>
        {/* price */}
        <Text
          style={{
            borderColor: 'grey',
            borderWidth: 0.4,
            height: 1,
            marginTop: 10
          }}
        />
        <View style={{ margin: 10 }}>
          <Text>Price for 1 night, {route.params.adults} adults</Text>
          <View style={{ flexDirection: 'row', gap: 5, marginTop: 5 }}>
            <Text
              style={{
                color: 'red',
                textDecorationLine: 'line-through',
                fontSize: 15,
                fontWeight: '600'
              }}
            >
              Rs {route.params.info.oldPrice * route.params.adults}
            </Text>
            <Text
              style={{
                color: 'black',

                fontSize: 15,
                fontWeight: '600'
              }}
            >
              Rs {route.params.info.newPrice * route.params.adults}
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: 'green',
              width: 60,
              padding: 3,
              borderRadius: 2,
              marginTop: 5
            }}
          >
            <Text style={{ color: 'white' }}>{offerPrice.toFixed(0)}%OFF</Text>
          </Pressable>
        </View>
        <Text
          style={{
            borderColor: 'grey',
            borderWidth: 0.4,
            height: 1,
            marginTop: 10
          }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', gap: 30, marginTop: 10 }}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '600' }}>Check In</Text>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 15,
                  fontWeight: '800'
                }}
              >
                {route.params.date.startDate}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '600' }}>Check Out</Text>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 15,
                  fontWeight: '800'
                }}
              >
                {route.params.date.endDate}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: '600' }}>
              Rooms and Guests
            </Text>
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 15,
                  fontWeight: '800'
                }}
              >
                {route.params.room} rooms{' '}
              </Text>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 15,
                  fontWeight: '800'
                }}
              >
                {route.params.adults} adults{' '}
              </Text>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 15,
                  fontWeight: '800'
                }}
              >
                {route.params.children} children{' '}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: 'grey',
            borderWidth: 0.4,
            height: 1,
            marginTop: 10
          }}
        />
        <Service />
        <Text
          style={{
            borderColor: 'grey',
            borderWidth: 0.4,
            height: 1,
            marginTop: 15
          }}
        />
      </ScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate('room', {
            info: route.params.info,
            children: route.params.children,
            date: route.params.date,
            adults: route.params.adults,
            room: route.params.room
          })
        }}
        style={{
          marginTop: 10,
          backgroundColor: COLORS.primary,
          padding: 14,
          alignItems: 'center',
          justifyContent: 'center',
          width: '96%',
          alignSelf: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
          Select Availability
        </Text>
      </Pressable>
    </View>
  )
}

export default PropertyScreen
