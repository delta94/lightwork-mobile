import React from 'react'
import { ViewStyle, Text, TextStyle } from 'react-native'
import { View } from 'native-base'
import { color } from '../../../../theme/color'
import { scale, fontSize } from '../../../../theme/dimensions'

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: scale(20),
  paddingBottom: scale(20),
  paddingHorizontal: scale(20),
  borderBottomColor: color.backGrey,
  borderBottomWidth: 1
}

const TEXT: TextStyle = {
  fontSize: fontSize.regular
}

const TITLE: TextStyle = {
  ...TEXT,
  fontWeight: 'bold',
  color: color.black
}

const Header = () => {
  return (
    <View style={ROW}>
      <Text style={TITLE}>Прочее</Text>
    </View>
  )
}

export default Header
