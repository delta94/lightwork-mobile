import React from 'react'
import { ViewStyle, View, Text, TextStyle } from 'react-native'
import { color } from '../../../theme'
import { scale, fontSize } from '../../../constants/dimensions';

const CONTAINER: ViewStyle = {
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: color.white,
  paddingHorizontal: scale(20),
  paddingVertical: scale(15),
  borderBottomColor: color.backGrey,
  borderBottomWidth: 1
}

const TEXT: TextStyle = {
  fontSize: fontSize.regular,
  color: color.black,
}

const Header = () => {
  return (
    <View style={CONTAINER}>
      <Text style={TEXT}>Оформление заказа</Text>
    </View>
  )
}

export default Header
