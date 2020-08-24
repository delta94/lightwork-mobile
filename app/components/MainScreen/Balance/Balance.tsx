import React from 'react'
import {
  ViewStyle,
  View,
  Text,
  TextStyle,
  Image,
  ImageStyle
} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { color } from '../../../theme'
import IMAGES from '../../../constants/images'
import { scale, fontSize } from '../../../constants/dimensions'

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  paddingHorizontal: scale(20),
  paddingBottom: scale(20),
  paddingTop: scale(10)
}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: scale(5)
}

const CARD_ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center'
}

const DIVIDER: ViewStyle = {
  marginVertical: scale(5)
}

// TextStyles
const TEXT: TextStyle = {
  fontSize: fontSize.regular
}

const TITLE: TextStyle = {
  ...TEXT,
  fontWeight: 'bold',
  color: color.black
}

const CODE: TextStyle = {
  ...TEXT,
  color: color.textGrey
}

const LINK: TextStyle = {
  ...TEXT,
  fontWeight: 'bold',
  color: color.green
}

// ImageStyles
const IMAGE: ImageStyle = {
  width: 35,
  marginRight: scale(10)
}

// COMPONENT
const Balance = (props: any) => {
  return (
    <View style={CONTAINER}>
      <View>
        <View style={ROW}>
          <Text style={TITLE}>Мои бонусы</Text>
          <BorderlessButton
            onPress={() => props.navigation.navigate('Bonuses')}
          >
            <Text style={LINK}>Все</Text>
          </BorderlessButton>
        </View>
        <View style={ROW}>
          <Text style={TEXT}>Бонусы</Text>
          <Text style={TEXT}>23</Text>
        </View>
      </View>
      <View style={DIVIDER}></View>
      <View>
        <View style={ROW}>
          <Text style={TITLE}>Карты</Text>
        </View>
        <View style={ROW}>
          <View style={CARD_ROW}>
            <Image style={IMAGE} source={IMAGES.main.card} />
            <Text>MasterCard Master</Text>
          </View>
          <Text style={CODE}>**** 6589</Text>
        </View>
      </View>
    </View>
  )
}

export default Balance
