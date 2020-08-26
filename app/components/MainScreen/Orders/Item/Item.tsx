import React from 'react'
import {
  Text,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle
} from 'react-native'
import IMAGES from '../../../../constants/images'
import { color } from '../../../../theme/color'
import { RectButton } from 'react-native-gesture-handler'
import { scale, fontSize } from '../../../../theme/dimensions'

const TEXT: TextStyle = {
  fontFamily: 'Lato'
}

let IMAGE_STYLE: ViewStyle = {
  borderRadius: 100,
  backgroundColor: color.greenLight,
  padding: scale(7)
}

const TEXT_DATE: TextStyle = {
  ...TEXT,
  color: color.black,
  fontSize: fontSize.regular
}

const TYPE_ROW: ViewStyle = {
  marginLeft: scale(10)
}

const ROW: ViewStyle = {
  paddingHorizontal: scale(20),
  paddingVertical: scale(15),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const TYPE_IMAGE: ImageStyle = {
  width: 26,
  height: 26
}

const CONTAINER: ViewStyle = {
  alignItems: 'stretch',
  flexDirection: 'column'
}

const ROW_LEFT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center'
}

const PRICE_ROW: ViewStyle = {}

const TEXT_PRICE: TextStyle = {
  fontSize: fontSize.regular,
  fontFamily: 'Lato-Bold',
  color: color.greenDark
}

const Item = (props: any) => {
  var TYPE
  var IMAGE
  switch (props.type) {
    case 'MASTER':
      TYPE = 'Заказ мастера'
      IMAGE = IMAGES.history.master
      IMAGE_STYLE = {
        ...IMAGE_STYLE,
        backgroundColor: color.orangeLight
      }
      break

    case 'CLEANING':
      TYPE = 'Заказ клинеров'
      IMAGE = IMAGES.history.cleaning
      IMAGE_STYLE = {
        ...IMAGE_STYLE,
        backgroundColor: color.blueLight
      }
      break

    case 'MOVERS':
      TYPE = 'Заказ грузчиков'
      IMAGE = IMAGES.history.mover
      IMAGE_STYLE = {
        ...IMAGE_STYLE,
        backgroundColor: color.greenLight
      }
      break
  }

  return (
    <RectButton style={CONTAINER}>
      <View>
        <View style={ROW}>
          <View style={ROW_LEFT}>
            <View style={IMAGE_STYLE}>
              <Image style={TYPE_IMAGE} source={IMAGE} />
            </View>
            <View style={TYPE_ROW}>
              <Text style={TEXT_DATE}>{TYPE}</Text>
            </View>
          </View>
          <View style={PRICE_ROW}>
            <Text style={TEXT_PRICE}>{props.price} ₸</Text>
          </View>
        </View>
      </View>
    </RectButton>
  )
}

export default Item
