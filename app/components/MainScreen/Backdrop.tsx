import React from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { color } from '../../theme'
import { scale, fontSize } from '../../theme/dimensions'

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  backgroundColor: color.green,
  padding: scale(20),
  justifyContent: 'flex-end',
  height: '40%'
}

// TextStyles
const BALANCE_TITLE: TextStyle = {
  color: color.white,
  fontSize: fontSize.large
}

const BALANCE: TextStyle = {
  color: color.white,
  fontSize: fontSize.xExtraLarge
}

// COMPONENT
const Backdrop = () => {
  return (
    <View style={CONTAINER}>
      <Text style={BALANCE_TITLE}>На счету</Text>
      <Text style={BALANCE}>2 350 ₸</Text>
    </View>
  )
}

export default Backdrop
