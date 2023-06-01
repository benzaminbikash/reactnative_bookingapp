import { View, Text, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import COLORS from '../constant/COLORS'
const MapScreen = () => {
  const route = useRoute()
  const mapView = useRef(null)

  return (
    <View>
      <MapView ref={mapView} style={{ width: '100%', height: '100%' }}>
        {route.params.searchPlaces.map(item =>
          item.properties.map((item, index) => (
            <Marker
              title={item.name}
              coordinate={{
                latitude: Number(item.latitude),
                longitude: Number(item.longitude)
              }}
            >
              <Pressable
                style={{
                  backgroundColor: COLORS.primary,
                  width: '100%',
                  borderRadius: 2
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: '600', color: 'white' }}
                >
                  {item.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  )
}

export default MapScreen
