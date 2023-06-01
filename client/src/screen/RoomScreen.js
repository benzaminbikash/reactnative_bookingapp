import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../constant/COLORS'
import { Feather } from '@expo/vector-icons'
import Service from '../compoenents/Service'
import { Entypo } from '@expo/vector-icons'

const RoomScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Rooms',
      headerTitleStyle: {
        fontSize: 18,
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
  const [selectRoom, setSelectRoom] = useState('')
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {route.params.info.rooms.map((item, index) => (
          <Pressable
            key={index}
            style={{
              backgroundColor: 'white',
              margin: 10,
              borderRadius: 5,
              padding: 10
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ color: COLORS.primary, fontWeight: '800' }}>
                {item.name}
              </Text>
              <Feather name='alert-circle' size={20} color={COLORS.primary} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: '400' }}>
              {item.payment}
            </Text>
            <Text style={{ color: 'green', marginTop: 3, fontWeight: '400' }}>
              Free cancellation available
            </Text>
            <View style={{ flexDirection: 'row', gap: 5, marginTop: 4 }}>
              <Text
                style={{ color: 'red', textDecorationLine: 'line-through' }}
              >
                Rs{route.params.info.oldPrice}
              </Text>
              <Text>Rs{route.params.info.newPrice}</Text>
            </View>
            <Service />
            {selectRoom.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: COLORS.primary,
                  borderWidth: 2,
                  padding: 8,
                  alignItems: 'center',
                  borderRadius: 4,
                  flexDirection: 'row'
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: '600',
                    fontSize: 15,
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  name='circle-with-cross'
                  size={20}
                  color='red'
                  onPress={() => setSelectRoom('')}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelectRoom(item.name)}
                style={{
                  borderColor: COLORS.primary,
                  borderWidth: 2,
                  padding: 8,
                  alignItems: 'center',
                  borderRadius: 4
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: '600',
                    fontSize: 15
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>
      {selectRoom.length > 0 ? (
        <Pressable
          onPress={() => {
            navigation.navigate('user', {
              info: route.params.info,
              children: route.params.children,
              room: route.params.room,
              adults: route.params.adults,
              date: route.params.date
            })
          }}
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            marginBottom: 10,
            alignItems: 'center',
            width: '95%',
            alignSelf: 'center',
            borderRadius: 3
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '900' }}>
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  )
}

export default RoomScreen
