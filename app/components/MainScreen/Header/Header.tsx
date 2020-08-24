import React from 'react'
import {
  ViewStyle,
  View,
  Text,
  ImageStyle,
  Image,
  TextStyle
} from 'react-native'
import { color } from '../../../theme'
import IMAGES from '../../../constants/images'
import { scale } from '../../../constants/dimensions'

const CONTAINER: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row'
}

const ROW: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row'
}

const INFO: ViewStyle = {
  paddingLeft: scale(10)
}

const TEXT_NAME: TextStyle = {
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Lato-Bold'
}

const TEXT_NUMBER: TextStyle = {
  color: color.white,
  fontSize: 12
}

const USER_IMAGE: ViewStyle = {
  borderRadius: 100,
  backgroundColor: '#e4e4e4',
  padding: scale(6)
}

const IMG_USER: ImageStyle = {
  width: 25,
  height: 25
}

const IMG_CHAT: ImageStyle = {
  width: 38,
  height: 38
}

const Header = () => {
  return (
    <View style={CONTAINER}>
      <View style={ROW}>
        <View style={USER_IMAGE}>
          <Image source={IMAGES.main.header.user} style={IMG_USER} />
        </View>
        <View style={INFO}>
          <Text style={TEXT_NAME}>Наш клиент</Text>
          <Text style={TEXT_NUMBER}>+7 (747) 489-53-31</Text>
        </View>
      </View>
      <Image source={IMAGES.main.header.chat} style={IMG_CHAT} />
    </View>
  )
}

export default Header
