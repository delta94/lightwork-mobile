import React from 'react'
import { ViewStyle, View, Text, TextStyle } from 'react-native'
import { color } from '../../../theme'

const CONTAINER: ViewStyle = {
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  paddingVertical: 15,
  borderBottomColor: color.backGrey,
  borderBottomWidth: 1,
}

const TEXT: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
}

const Header = (props: any) => {
  return (
    <View style={CONTAINER}>
      <Text style={TEXT}>Оформление заказа</Text>
    </View>
  )
}

export default Header
