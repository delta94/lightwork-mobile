import React from 'react'
import {
  ViewStyle,
  Image,
  View,
  Text,
  TextStyle,
  ImageStyle
} from 'react-native'
import IMAGES from '../../../constants/images'
import { color } from '../../../theme'
import { scale, fontSize } from '../../../theme/dimensions'

// STYLES
// ViewStyles
const ROW: ViewStyle = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'flex-start',
  paddingLeft: scale(20),
  marginVertical: scale(10),
  alignItems: 'center'
}

const ITEM_IMAGE: ViewStyle = {
  paddingVertical: scale(4),
  paddingHorizontal: scale(3)
}

const ITEM: ViewStyle = {
  width: '100%',
  marginLeft: scale(20)
}

// TextStyles
const TEXT: TextStyle = {
  fontSize: fontSize.regular,
  color: color.textGrey
}

// ImageStyles
const IMG_STATUS: ImageStyle = {
  width: 25,
  height: 25
}

// COMPONENT
const Status = (props: any) => {
  let STATUS_IMAGE
  let STATUS_TEXT
  let TEXT_COLOR
  switch (props.status) {
    case 'active':
      STATUS_IMAGE = IMAGES.history.details.status.active
      STATUS_TEXT = 'В процессе'
      TEXT_COLOR = color.yellow
      break

    case 'done':
      STATUS_IMAGE = IMAGES.history.details.status.done
      STATUS_TEXT = 'Успешно выполнен'
      TEXT_COLOR = color.green
      break

    case 'failed':
      STATUS_IMAGE = IMAGES.history.details.status.failed
      STATUS_TEXT = 'Заказ отклонен'
      TEXT_COLOR = color.red
      break
  }
  return (
    <View style={ROW}>
      <View style={ITEM_IMAGE}>
        <Image source={STATUS_IMAGE} style={IMG_STATUS} />
      </View>
      <View style={ITEM}>
        <Text style={{ ...TEXT, color: TEXT_COLOR }}>{STATUS_TEXT}</Text>
      </View>
    </View>
  )
}

export default Status
