import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput
} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import data from '../data/data'
import SearchResult from '../compoenents/SearchResult'

const SearchScreen = () => {
  const [input, setInput] = useState('')
  console.log(input)
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <View
        style={{
          borderColor: '#e68143',
          borderWidth: 3,
          padding: 10,
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextInput
          placeholder='Enter your Destination'
          value={input}
          onChangeText={e => setInput(e)}
        />
        <AntDesign name='search1' size={20} color='black' />
      </View>
      <View>
        <SearchResult data={data} input={input} setInput={setInput} />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
