import React from 'react'
import { ViewStyle, Text, TextStyle } from 'react-native'
import { View } from 'native-base'
import { color } from '../../../../theme/color'

const CONTAINER: ViewStyle = {}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 20,
  paddingBottom: 20,
  paddingHorizontal: 20,
  borderBottomColor: color.backGrey,
  borderBottomWidth: 1
}

const TEXT: TextStyle = {
  fontSize: 17
}

const TITLE: TextStyle = {
  ...TEXT,
  fontWeight: 'bold'
}

const Header = () => {
  return (
    <View style={ROW}>
      <Text style={TITLE}>Прочее</Text>
    </View>
  )
}

export default Header
