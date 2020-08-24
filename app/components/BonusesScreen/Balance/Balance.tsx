import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { scale } from '../../../constants/dimensions'

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  paddingHorizontal: scale(20),
  paddingTop: scale(10),
  backgroundColor: '#fff',
  flexDirection: 'column',
  paddingBottom: scale(20)
}

// TextStyles
const TEXT: TextStyle = {
  fontFamily: 'Lato'
}

const BONUS_COUNT: TextStyle = {
  ...TEXT,
  color: '#444',
  fontSize: 52,
  fontWeight: '500',
  fontFamily: 'Lato-Bold'
}

const TEXT_MUTED: TextStyle = {
  ...TEXT,
  color: '#666',
  fontSize: 16
}

// COMPONENT
const Balance = (props: any) => {
  return (
    <View style={CONTAINER}>
      <Text style={BONUS_COUNT}>{props.balance}</Text>
      <Text style={TEXT_MUTED}>
        Заказывая услуги в компании Lightwork Вы возвращаете 1% с каждого заказа
      </Text>
    </View>
  )
}

export default Balance
