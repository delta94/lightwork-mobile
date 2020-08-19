import React, { useState, useEffect } from 'react'
import { View, ViewStyle, Text, TextStyle, FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { color } from '../../theme'

// DATA
const BUTTONS = [
  {
    id: 1,
    title: 'Все',
    color: color.yellow,
    textColor: color.black,
    type: 'ALL'
  },
  {
    id: 2,
    title: 'Грузчики',
    color: color.green,
    textColor: color.white,
    type: 'MOVERS'
  },
  {
    id: 3,
    title: 'Мастера',
    color: color.orange,
    textColor: color.white,
    type: 'MASTER'
  },
  {
    id: 4,
    title: 'Клининг',
    color: color.blue,
    textColor: color.white,
    type: 'CLEANING'
  }
]

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  alignSelf: 'auto',
  flexDirection: 'row',
  paddingLeft: 0,
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderColor: '#eee',
  backgroundColor: '#fff'
}

const FLATLIST: ViewStyle = {
  marginLeft: 20
}

const BUTTON = {
  borderRadius: 20,
  marginEnd: 10,
  backgroundColor: '#f4f4f4'
}

// TextStyles
const BUTTON_TEXT: TextStyle = {
  paddingVertical: 10,
  paddingHorizontal: 20
}

// COMPONENT
const HistoryFilter = (props) => {
  const [activeType, setActive] = useState('ALL')
  useEffect(() => {
    props.setValue(activeType)
  })
  return (
    <View style={CONTAINER}>
      <FlatList
        style={FLATLIST}
        data={BUTTONS}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <RectButton
              style={{
                ...BUTTON,
                backgroundColor:
                  activeType == item.type ? item.color : '#f4f4f4'
              }}
              onPress={() => setActive(item.type)}
            >
              <Text
                style={{
                  ...BUTTON_TEXT,
                  color: activeType == item.type ? item.textColor : '#000'
                }}
              >
                {item.title}
              </Text>
            </RectButton>
          )
        }}
        keyExtractor={(item) => 'filter-button-' + item.id}
        horizontal
      />
    </View>
  )
}

export default HistoryFilter
