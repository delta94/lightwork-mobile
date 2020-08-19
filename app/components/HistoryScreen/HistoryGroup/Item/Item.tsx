import React from 'react'
import { Text, TextStyle, View, ViewStyle, Image, ImageStyle } from 'react-native'
import IMAGES from '../../../../constants/images'
import { color } from '../../../../theme/color'
import { RectButton } from 'react-native-gesture-handler'

const TEXT: TextStyle = {
  fontFamily: 'Lato'
}

let IMAGE_STYLE: ViewStyle = {
  borderRadius: 100,
  backgroundColor: '#E2FFBB',
  padding: 7
}

const TEXT_DATE: TextStyle = {
  ...TEXT,
  color: '#565656',
  fontSize: 16,
  fontFamily: 'Lato-Bold'
}

const TEXT_TITLE: TextStyle = {
  color: '#777',
  fontSize: 14
}

const TYPE_ROW: ViewStyle = {
  marginLeft: 10
}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderBottomColor: '#eee',
  borderBottomWidth: 1
}

const TYPE_IMAGE: ImageStyle = {
  width: 22,
  height: 22
}

const CONTAINER: ViewStyle = {
  alignItems: 'stretch',
  flexDirection: 'column',

  backgroundColor: '#fff'
}

const ROW_LEFT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center'
}

const PRICE_ROW: ViewStyle = {
}

const TEXT_PRICE: TextStyle = {
  fontSize: 17,
  fontFamily: 'Lato-Bold',
  color: color.greenDark
}

const Item = (props) => {
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
    <RectButton style={CONTAINER} onPress={() => props.navigation.navigate('Details', {
      itemId: props.id,
      price: props.price,
      bonusCount: props.bonusCount,
      type: props.type,
      date: props.date,
      duration: props.duration,
      status: props.status
    })}>
      <View style={ROW}>
        <View style={ROW_LEFT}>
          <View style={IMAGE_STYLE}>
            <Image style={TYPE_IMAGE} source={IMAGE} />
          </View>
          <View style={TYPE_ROW}>
            <Text style={TEXT_TITLE}>Оплата Услуги</Text>
            <Text style={TEXT_DATE}>{TYPE}</Text>
          </View>
        </View>
        <View style={PRICE_ROW}>
          <Text style={TEXT_PRICE}>{props.price} ₸</Text>
        </View>
      </View>
    </RectButton>
  )
}

export default Item
