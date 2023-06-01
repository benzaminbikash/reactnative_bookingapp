import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../constant/COLORS'
import { Octicons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import data from '../data/data'
import Cartd from '../compoenents/Cartd'
import { Entypo } from '@expo/vector-icons'

import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation
} from 'react-native-modals'
import { filters } from '../data/data'

const PlaceScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Popular Places',
      headerStyle: {
        backgroundColor: COLORS.primary,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent'
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      }
    })
  }, [])
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectFilter] = useState([])

  const searchPlaces = data?.filter(item => item.place === route.params.place)

  const [sortData, setSortData] = useState(data)
  console.log(searchPlaces)
  const compare = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1
    }
    if (a.newPrice < b.newPrice) {
      return 1
    }
    return 0
  }
  const comparison = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1
    }
    if (a.newPrice > b.newPrice) {
      return 1
    }
    return 0
  }

  const applyFilter = data => {
    setIsVisible(!isVisible)
    switch (data) {
      case 'cost:Low to High':
        searchPlaces.map(val => val.properties.sort(comparison))
        setSortData(searchPlaces)
        break
      case 'cost:High to Low':
        searchPlaces.map(val => val.properties.sort(compare))
        setSortData(searchPlaces)
        break
    }
  }
  return (
    <View>
      <Pressable
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          alignItems: 'center'
        }}
      >
        <Pressable
          onPress={() => {
            setIsVisible(!isVisible)
          }}
          style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
        >
          <Octicons name='arrow-switch' size={20} color='black' />
          <Text>Sort</Text>
        </Pressable>
        <Pressable
          style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
        >
          <Ionicons name='filter' size={20} color='black' />
          <Text>Filter</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('map', {
              searchPlaces: searchPlaces
            })
          }
          style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
        >
          <FontAwesome5 name='map-marker-alt' size={20} color='black' />
          <Text>Map</Text>
        </Pressable>
      </Pressable>
      <ScrollView
        style={{ marginBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {sortData
          .filter(item => item.place === route.params.place)
          .map((item, index) =>
            item.properties.map((pro, i) => (
              <Cartd
                property={pro}
                i={i}
                children={route.params.children}
                adults={route.params.adults}
                date={route.params.date}
                room={route.params.room}
              />
            ))
          )}
      </ScrollView>
      <BottomModal
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                padding: 10,
                backgroundColor: COLORS.primary,
                width: '100%'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                Apply
              </Text>
            </Pressable>
          </ModalFooter>
        }
        onHardwareBackPress={() => setIsVisible(!isVisible)}
        swipeDirection={['up', 'down']}
        onBackdropPress={() => setIsVisible(!isVisible)}
        onTouchOutside={() => setIsVisible(!isVisible)}
        visible={isVisible}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom'
          })
        }
        modalTitle={<ModalTitle title='Sort and Filter' />}
      >
        <ModalContent
          style={{ width: '100%', height: 210, backgroundColor: 'white' }}
        >
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <View
              style={{ flex: 2, alignItems: 'center', borderRightWidth: 1 }}
            >
              <Text>Sort</Text>
            </View>
            <View style={{ flex: 3, marginLeft: 7 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setSelectFilter(item.filter)}
                  key={index}
                  style={{ flexDirection: 'row', gap: 6, marginBottom: 7 }}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome5 name='dot-circle' size={20} color='red' />
                  ) : (
                    <Entypo name='circle' size={20} color='black' />
                  )}
                  <Text>{item.filter}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  )
}

export default PlaceScreen
