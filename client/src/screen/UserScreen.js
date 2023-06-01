import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../constant/COLORS'

const UserScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'User Details',
      headerTitleStyle: {
        fontSize: 20,
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
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const finalsetup = () => {
    if (!fname || !lname || !email || !phone) {
      Alert.alert('Invalid Details', 'Please fields all details.')
    }
    if (fname && lname && email && phone) {
      navigation.navigate('confirm', {
        children: route.params.children,
        room: route.params.room,
        adults: route.params.adults,
        date: route.params.info.date,
        name: route.params.info.name,
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        rating: route.params.info.rating,
        startDate: route.params.date.startDate,
        endDate: route.params.date.endDate
      })
    }
  }
  return (
    <>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'column', gap: 5 }}>
          <Text>First Name</Text>
          <TextInput
            style={{ padding: 8, borderColor: 'grey', borderWidth: 1 }}
            value={fname}
            onChangeText={e => setFName(e)}
          />
        </View>
        <View style={{ flexDirection: 'column', gap: 5 }}>
          <Text style={{ marginTop: 10 }}>Last Name</Text>
          <TextInput
            style={{ padding: 8, borderColor: 'grey', borderWidth: 1 }}
            value={lname}
            onChangeText={e => setLName(e)}
          />
        </View>
        <View style={{ flexDirection: 'column', gap: 5 }}>
          <Text style={{ marginTop: 10 }}>Email</Text>
          <TextInput
            style={{ padding: 8, borderColor: 'grey', borderWidth: 1 }}
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </View>
        <View style={{ flexDirection: 'column', gap: 5 }}>
          <Text style={{ marginTop: 10 }}>Phone Number</Text>
          <TextInput
            style={{ padding: 8, borderColor: 'grey', borderWidth: 1 }}
            value={phone}
            onChangeText={e => setPhone(e)}
          />
        </View>
      </View>
      <Pressable
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          width: '100%',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                fontWeight: '600',
                textDecorationLine: 'line-through'
              }}
            >
              Rs{route.params.info.oldPrice * route.params.adults}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: '600'
              }}
            >
              Rs{route.params.info.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You saved Rs{' '}
            {route.params.info.oldPrice - route.params.info.newPrice}
          </Text>
        </View>
        <Pressable
          onPress={() => finalsetup()}
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            width: 100,
            alignItems: 'center',
            borderRadius: 3
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '900' }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  )
}

export default UserScreen
