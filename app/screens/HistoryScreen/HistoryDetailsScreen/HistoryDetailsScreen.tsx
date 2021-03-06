import React from 'react'
import {
  Text,
  View,
  ViewStyle,
  TextStyle,
  Image,
  ImageStyle
} from 'react-native'
import moment from 'moment/min/moment-with-locales'
import IMAGES from '../../../constants/images'
import Status from '../../../components/HistoryDetailsScreen/Status/Status'
import { fontSize, scale } from '../../../theme/dimensions'
import { color } from '../../../theme/color'

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  backgroundColor: color.white,
  flexDirection: 'column',
  alignSelf: 'stretch',
  flex: 1,
  paddingVertical: scale(20)
}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'flex-start',
  paddingLeft: scale(20),
  marginVertical: scale(10),
  alignItems: 'flex-end'
}

const ITEM_IMAGE: ViewStyle = {
  paddingVertical: scale(4)
}

const ITEM: ViewStyle = {
  borderBottomColor: color.backGrey,
  borderBottomWidth: 1,
  width: '100%',
  marginLeft: scale(20)
}

// TextStyles
const TEXT_TITLE: TextStyle = {
  fontSize: fontSize.small,
  color: color.textGrey
}

const TEXT_DESCR: TextStyle = {
  fontSize: fontSize.regular,
  paddingBottom: scale(2)
}

// ImageStyles
const IMG_TYPE: ImageStyle = {
  width: 30,
  height: 30
}

// COMPONENT
const HistoryDetailsScreen = (props: any) => {
  const {
    itemId,
    status,
    duration,
    price,
    bonusCount,
    type,
    date
  } = props.route.params
  let TYPE
  let TYPE_IMAGE
  switch (type) {
    case 'MASTER':
      TYPE = 'Заказ мастера'
      TYPE_IMAGE = IMAGES.history.details.type.master
      break

    case 'CLEANING':
      TYPE = 'Заказ клинеров'
      TYPE_IMAGE = IMAGES.history.details.type.cleaning
      break

    case 'MOVERS':
      TYPE = 'Заказ грузчиков'
      TYPE_IMAGE = IMAGES.history.details.type.mover
      break
  }
  const DATA = [
    {
      title: 'Описание',
      descr: TYPE,
      image: TYPE_IMAGE
    },
    {
      title: 'Бонусы',
      descr: bonusCount + ' Б',
      image: IMAGES.history.details.bonuses
    },
    {
      title: 'Сумма списания',
      descr: price + ' ₸',
      image: IMAGES.history.details.money
    },
    {
      title: 'Длительность заказа',
      descr: duration,
      image: IMAGES.history.details.duration
    },
    {
      title: 'Дата',
      descr: moment(date).locale('ru').format('LL'),
      image: IMAGES.history.details.date
    }
  ]
  const ITEMS = DATA.map((n) => {
    return (
      <View style={ROW} key={itemId}>
        <View style={ITEM_IMAGE}>
          <Image source={n.image} style={IMG_TYPE} />
        </View>
        <View style={ITEM}>
          <Text style={TEXT_TITLE}>{n.title}</Text>
          <Text style={TEXT_DESCR}>{n.descr}</Text>
        </View>
      </View>
    )
  })
  return (
    <View style={CONTAINER}>
      <Status status={status} />
      {ITEMS}
    </View>
  )
}

export default HistoryDetailsScreen
