import { View, Text } from 'react-native'
import React from 'react'
import service from '../data/service'
import COLORS from '../constant/COLORS'

const Service = () => {
  return (
    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
      <Text style={{ fontSize: 16, fontWeight: '800' }}>
        Most Popular Facilities
      </Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}
      >
        {service.map((item, index) => (
          <View
            key={index}
            style={{
              paddingHorizontal: 10,
              backgroundColor: COLORS.primary,
              margin: 10,
              paddingVertical: 3,
              borderRadius: 15
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Service
