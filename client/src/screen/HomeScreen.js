import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Modal,
  Image,
  Alert
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import Header from '../compoenents/Header'
import DatePicker from 'react-native-date-ranges'
import COLORS from '../constant/COLORS'
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation
} from 'react-native-modals'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [selectdate, setSelectDate] = useState()
  const [room, setRoom] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const route = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
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
      },
      headerRight: () => (
        <Ionicons
          name='notifications-outline'
          size={24}
          color='white'
          style={{ marginRight: 10 }}
        />
      )
    })
  }, [])

  const customButton = onConfirm => (
    <Button
      onPress={onConfirm}
      style={{
        container: { width: '80%', marginHorizontal: '3%' },
        text: { fontSize: 20 }
      }}
      primary
      title='Submit'
    />
  )
  const searchPlaces = place => {
    if (!route.params || !selectdate) {
      Alert.alert('Invalid Details', 'Please select all fields')
    }
    if (route.params && selectdate) {
      navigation.navigate('place', {
        room: room,
        adults: adults,
        children: children,
        date: selectdate,
        place: place
      })
    }
  }
  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderWidth: 3,
              borderColor: '#e68143',
              borderRadius: 6
            }}
          >
            <Pressable
              onPress={() => navigation.navigate('search')}
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                borderWidth: 3,
                borderColor: '#e68143',
                padding: 10
              }}
            >
              <Ionicons name='search-sharp' size={24} color='black' />
              <TextInput
                placeholder={
                  route.params ? route.params.input : 'Enter your Destination'
                }
                placeholderTextColor='black'
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                borderWidth: 3,
                borderColor: '#e68143',
                padding: 10
              }}
            >
              <Ionicons name='calendar-outline' size={24} color='black' />
              <DatePicker
                style={{ width: 350, height: 30, borderWidth: 0 }}
                customStyles={{
                  placeholderText: {
                    fontSize: 14,
                    marginRight: 'auto'
                  },
                  headerStyle: {
                    backgroundColor: '#1139d6'
                  },
                  contentText: {
                    fontSize: 15,
                    marginRight: 'auto'
                  }
                }} // optional
                centerAlign
                allowFontScaling={false}
                placeholder={'Select your Date'}
                mode={'range'}
                selectedBgColor='#1139d6'
                customButton={onConfirm => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectDate(startDate, endDate)
                }
              />
            </Pressable>

            <Pressable
              onPress={() => setIsVisible(!isVisible)}
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                borderWidth: 3,
                borderColor: '#e68143',
                padding: 10
              }}
            >
              <Ionicons name='person' size={24} color='black' />
              <TextInput
                aria-disabled
                placeholder={`${room} room * ${adults} adults * ${children} children`}
                placeholderTextColor='red'
              />
            </Pressable>
            <Pressable
              onPress={() => searchPlaces(route?.params.input)}
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',

                padding: 10,
                justifyContent: 'center',
                backgroundColor: COLORS.primary
              }}
            >
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{ marginHorizontal: 20, fontSize: 17, fontWeight: '600' }}
            >
              Travel More spend less
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Pressable
                style={{
                  backgroundColor: COLORS.primary,
                  width: 200,
                  padding: 20,
                  borderRadius: 10,
                  // marginHorizontal: 20,
                  marginLeft: 20,
                  marginRight: 5,
                  marginTop: 5,
                  elevation: 10
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 18, fontWeight: '900' }}
                >
                  Genius
                </Text>
                <Text
                  style={{ color: 'white', fontSize: 15, fontWeight: '500' }}
                >
                  You are ate genius level one in our loyalty program.
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: 200,
                  padding: 20,
                  borderRadius: 10,
                  marginHorizontal: 5,
                  marginTop: 5,
                  borderWidth: 1,
                  borderColor: 'grey'
                }}
              >
                <Text
                  style={{ color: 'black', fontSize: 18, fontWeight: '900' }}
                >
                  15% Discount
                </Text>
                <Text
                  style={{ color: 'black', fontSize: 15, fontWeight: '500' }}
                >
                  Complete 5 stays to unlock Genius level 2
                </Text>
              </Pressable>
            </ScrollView>
            <Pressable>
              <Image
                style={{
                  alignSelf: 'center',
                  width: 300,
                  height: 120,
                  marginTop: 10
                }}
                source={{
                  uri: 'https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png'
                }}
              />
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setIsVisible(!isVisible)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <ModalButton
              text='Apply'
              textStyle={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}
              style={{ backgroundColor: COLORS.primary }}
              onPress={() => setIsVisible(!isVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title='Search rooms and guests' />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom'
          })
        }
        onHardwareBackPress={() => setIsVisible(!isVisible)}
        visible={isVisible}
        onTouchOutside={() => setIsVisible(!isVisible)}
      >
        <ModalContent style={{ width: '100%', height: 300 }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
            >
              <Pressable
                onPress={() => setRoom(Math.max(1, room - 1))}
                style={{
                  backgroundColor: 'grey',
                  width: 26,
                  height: 26,
                  borderRadius: 26,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white', fontSize: 17 }}>-</Text>
              </Pressable>
              <Pressable>
                <Text>{room}</Text>
              </Pressable>
              <Pressable
                onPress={() => setRoom(e => e + 1)}
                style={{
                  backgroundColor: 'grey',
                  width: 26,
                  height: 26,
                  borderRadius: 26,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>+</Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Adults</Text>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  backgroundColor: 'grey',
                  width: 26,
                  height: 26,
                  borderRadius: 26,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white', fontSize: 17 }}>-</Text>
              </Pressable>
              <Pressable>
                <Text>{adults}</Text>
              </Pressable>
              <Pressable
                onPress={() => setAdults(e => e + 1)}
                style={{
                  backgroundColor: 'grey',
                  width: 26,
                  height: 26,
                  borderRadius: 26,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>+</Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Children</Text>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  backgroundColor: 'grey',
                  width: 26,
                  height: 26,
                  borderRadius: 26,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white', fontSize: 17 }}>-</Text>
              </Pressable>
              <Pressable>
                <Text>{children}</Text>
              </Pressable>
              <Pressable
                onPress={() => setChildren(e => e + 1)}
                style={{
                  backgroundColor: 'grey',
                  width: 26,
                  height: 26,
                  borderRadius: 26,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen
