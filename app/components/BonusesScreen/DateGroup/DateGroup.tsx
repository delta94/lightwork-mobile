import React from 'react'
import { ViewStyle, View, Text, TextStyle } from 'react-native'
import Item from '../Item/Item'
import moment from 'moment/min/moment-with-locales'

// STYLES
const CONTAINER: ViewStyle = {}

const HEADER: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 5,
}

const TEXT_DATE: TextStyle = {
  color: '#888',
  fontFamily: 'Lato',
  fontSize: 14,
}

const DateGroup = (props) => {
  const Items = props.data.map((n) => {
    if (n.date == props.date) {
      return (
        <Item
          type={n.type}
          bonusCount={n.bonusCount}
          key={n.id}
          price={n.price}
        />
      )
    }
  })
  return (
    <View style={CONTAINER}>
      <View style={HEADER}>
        <Text style={TEXT_DATE}>
          {moment(props.date).locale('ru').format('LL')}
        </Text>
      </View>
      {Items}
    </View>
  )
}

export default DateGroup
