import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('window')
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import COLORS from '../constant/COLORS'
import { useNavigation } from '@react-navigation/native'

const Cartd = ({ property, i, children, date, adults, room }) => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('property', {
            info: property,
            children: children,
            date: date,
            adults: adults,
            room: room
          })
        }}
        style={{ backgroundColor: 'white', flexDirection: 'row', margin: 10 }}
      >
        <View>
          <Image
            source={{ uri: property.image }}
            style={{ width: width - 280, height: height / 3.7 }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ width: 190, fontSize: 16, fontWeight: '500' }}>
              {property.name}
            </Text>
            <AntDesign
              name='hearto'
              size={24}
              color='red'
              style={{ marginLeft: 20 }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 7,
              alignItems: 'center',
              marginTop: 4
            }}
          >
            <MaterialIcons name='stars' size={24} color='green' />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: COLORS.primary,
                padding: 4,
                width: 100,
                alignItems: 'center',
                borderRadius: 5
              }}
            >
              <Text style={{ color: 'white', fontSize: 12 }}>Genius Level</Text>
            </View>
          </View>
          <Text
            style={{
              width: 220,
              marginTop: 4,
              color: 'grey',
              fontSize: 14,
              fontWeight: '400'
            }}
          >
            {property.address.length > 50
              ? property.address.substring(0, 50) + '...'
              : property.address}
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text
              style={{
                color: 'red',
                textDecorationLine: 'line-through'
              }}
            >
              Rs{property.oldPrice * adults}{' '}
            </Text>
            <Text>Rs{property.newPrice * adults} </Text>
          </View>
          <View>
            <Text style={{ color: 'grey' }}>Deluxe Room</Text>
            <Text style={{ color: 'grey' }}>Hotel Room : 1 bed</Text>
          </View>
          <View
            style={{
              marginTop: 4,
              backgroundColor: COLORS.primary,
              width: 110,
              alignItems: 'center',
              borderRadius: 3
            }}
          >
            <Text style={{ color: 'white', fontSize: 12, padding: 3 }}>
              Limited Time Deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default Cartd
