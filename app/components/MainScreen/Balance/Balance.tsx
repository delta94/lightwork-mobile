import React from 'react'
import {
  ViewStyle,
  View,
  Text,
  TextStyle,
  Image,
  ImageStyle,
} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { color } from '../../../theme'
import IMAGES from '../../../constants/images'

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  paddingHorizontal: 20,
  paddingBottom: 20,
  paddingTop: 10,
}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 5,
}

const CARD_ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
}

const DIVIDER: ViewStyle = {
  paddingVertical: 5,
}

// TextStyles
const TEXT: TextStyle = {
  fontSize: 17,
}

const TITLE: TextStyle = {
  ...TEXT,
  fontWeight: 'bold',
}

const CODE: TextStyle = {
  ...TEXT,
  color: '#666',
}

const LINK: TextStyle = {
  ...TEXT,
  fontWeight: 'bold',
  color: color.green,
}

// ImageStyles
const IMAGE: ImageStyle = {
  width: 35,
  marginRight: 10,
}

// COMPONENT
const Balance = (props) => {
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
