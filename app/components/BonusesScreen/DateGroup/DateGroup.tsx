import React from 'react'
import { ViewStyle, View, Text, TextStyle } from 'react-native'
import Item from '../Item/Item'
import moment from 'moment/min/moment-with-locales'
import { scale, fontSize } from '../../../constants/dimensions';

// STYLES
//ViewStyles
const CONTAINER: ViewStyle = {}

const HEADER: ViewStyle = {
  paddingHorizontal: scale(20),
  paddingVertical: scale(5)
}

//TextStyles
const TEXT_DATE: TextStyle = {
  color: '#888',
  fontFamily: 'Lato',
  fontSize: fontSize.small
}

//COMPONENT
const DateGroup = (props: any) => {
  const Items = props.data.map((n: any) => {
    if (n.date === props.date) {
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
