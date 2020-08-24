import React from 'react'
import {
  Text,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  Image
} from 'react-native'
import { color } from '../../../theme'
import { RectButton } from 'react-native-gesture-handler'
import moment from 'moment/min/moment-with-locales'
import IMAGES from '../../../constants/images'
import { scale, fontSize } from '../../../constants/dimensions';

// DOCUMENTATION
// https://momentjs.com/
// https://reactnative.dev/docs/touchablewithoutfeedback

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  borderBottomWidth: 1,
  borderColor: '#f4f4f4'
}

const IMAGE_VIEW: ViewStyle = {
  backgroundColor: '#f4f4f4',
  borderRadius: 100,
  padding: scale(7),
  alignSelf: 'flex-start',
  borderColor: '#e8e8e8',
  borderWidth: 1
}

const IMAGE: ImageStyle = {
  width: 25,
  height: 25
}

const ROW: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: scale(20),
  backgroundColor: '#fff',
  paddingVertical: scale(15),
  borderBottomWidth: 1,
  borderColor: '#f4f4f4',
  justifyContent: 'space-between'
}

const ROW_LEFT: ViewStyle = {
  justifyContent: 'center',
  flexDirection: 'row'
}

const ROW_RIGHT: ViewStyle = {
  alignSelf: 'flex-start',
  flexDirection: 'row'
}

const TEXT_VIEW: ViewStyle = {
  paddingLeft: scale(10)
}

// TextStyles
const TEXT_SERVICE: TextStyle = {
  color: '#565656',
  fontSize: fontSize.regularSmall,
  marginTop: 0,
  fontFamily: 'Lato-Bold'
}

const TEXT_DATE: TextStyle = {
  color: '#777',
  fontSize: fontSize.smaller,
  paddingBottom: scale(5)
}

const BONUS_COUNT: TextStyle = {
  fontSize: fontSize.regularSmall,
  fontFamily: 'Lato-Bold',
  color: color.green
}

// COMPONENT
const Item = (props: any) => {
  var TYPE
  switch (props.type) {
    case 'MASTER':
      TYPE = 'Заказ мастера'
      break
    case 'CLEANING':
      TYPE = 'Заказ клинеров'
      break
    case 'MOVERS':
      TYPE = 'Заказ грузчиков'
      break
  }

  return (
    <View style={CONTAINER}>
      <RectButton style={ROW}>
        <View style={ROW_LEFT}>
          <View style={IMAGE_VIEW}>
            <Image style={IMAGE} source={IMAGES.history.dark} />
          </View>
          <View style={TEXT_VIEW}>
            <Text style={TEXT_SERVICE}>Накопление Бонусов</Text>
            <Text style={TEXT_DATE}>
              {TYPE} {moment(props.date).locale('ru').format('LL')}
            </Text>
          </View>
        </View>
        <View style={ROW_RIGHT}>
          <Text style={BONUS_COUNT}> + {props.bonusCount} Б</Text>
        </View>
      </RectButton>
    </View>
  )
}

export default Item
