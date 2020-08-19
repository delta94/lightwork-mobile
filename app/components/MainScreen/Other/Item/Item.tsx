import React from 'react'
import {
  ViewStyle,
  View,
  Image,
  Text,
  TextStyle,
  ImageStyle
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const CONTAINER: ViewStyle = {}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingVertical: 15,
  paddingHorizontal: 20
}

const TEXT: TextStyle = {
  fontSize: 13,
  color: '#555'
}

const TITLE: TextStyle = {
  fontSize: 15
}

// ImageStyles
const IMAGE: ImageStyle = {
  width: 35,
  height: 35,
  marginRight: 15
}

const Item = (props) => {
  return (
    <RectButton>
      <View style={ROW} key={'item-' + props.id}>
        <Image style={IMAGE} source={props.image} />
        <View>
          <Text style={TITLE}>{props.title}</Text>
          <Text style={TEXT}>{props.text}</Text>
        </View>
      </View>
    </RectButton>
  )
}

export default Item
