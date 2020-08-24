import React from 'react'
import {
  ViewStyle,
  View,
  Text,
  TextStyle
} from 'react-native'
import { color } from '../../../../../theme'
import { RectButton } from 'react-native-gesture-handler'
import { scale } from '../../../../../constants/dimensions'

const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: scale(10)
}

const TITLE: TextStyle = {}

const COUNT_PICKER: ViewStyle = {
  backgroundColor: color.white,
  flexDirection: 'row',
  borderRadius: 15,
  borderWidth: 1,
  borderColor: color.backGrey
}

const ITEM: ViewStyle = {
  alignSelf: 'stretch',
  padding: scale(8),
  paddingHorizontal: scale(30)
}

const Gazzelle = (props: any) => {
  const a = [
    {
      title: 'Да',
      flag: true
    },
    {
      title: 'Нет',
      flag: false
    }
  ]
  const Items = a.map((n, index) => {
    return (
      <View
        style={[
          { overflow: 'hidden' },
          index === 0
            ? { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }
            : { borderTopRightRadius: 15, borderBottomRightRadius: 15 }
        ]}
        key={'picker-item-' + index}
      >
        <RectButton
          style={[
            n.flag === props.isGazzelle
              ? { backgroundColor: color.green }
              : { backgroundColor: color.white }
          ]}
          onPress={() => props.setGazzelle(n.flag)}
        >
          <Text
            style={{
              ...ITEM,
              color: n.flag === props.isGazzelle ? color.white : color.black
            }}
          >
            {n.title}
          </Text>
        </RectButton>
      </View>
    )
  })
  return (
    <View style={CONTAINER}>
      <Text style={TITLE}>Газель</Text>
      <View style={COUNT_PICKER}>{Items}</View>
    </View>
  )
}

export default Gazzelle
