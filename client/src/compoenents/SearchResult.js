import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResult = ({ data, input, setInput }) => {
  const navigation = useNavigation()
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === '') {
              return null
            } else {
              return (
                <Pressable
                  onPress={() => {
                    setInput(item.place)
                    navigation.navigate('Home', { input: item.place })
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: item.placeImage }}
                      style={{ width: 70, height: 70 }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600'
                      }}
                    >
                      {item.place}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 15,
                        fontWeight: '400'
                      }}
                    >
                      {item.shortDescription}
                    </Text>
                    <Text style={{ color: 'grey' }}>
                      {item.properties.length} Properties
                    </Text>
                  </View>
                </Pressable>
              )
            }
          }
        }}
      />
    </View>
  )
}

export default SearchResult
