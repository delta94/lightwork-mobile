import React from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { color } from '../../theme'

const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  backgroundColor: color.green,
  padding: 20,
  justifyContent: 'flex-end',
  height: '40%'
}

const BALANCE_TITLE: TextStyle = {
  color: color.white,
  fontSize: 20
}

const BALANCE: TextStyle = {
  color: color.white,
  fontSize: 50
}

const Backdrop = () => {
  return (
    <View style={CONTAINER}>
      <Text style={BALANCE_TITLE}>На счету</Text>
      <Text style={BALANCE}>2 350 ₸</Text>
    </View>
  )
}

export default Backdrop
