import React, { useState } from 'react'
import { ViewStyle, View, Text, TextStyle } from 'react-native'
import { color } from '../../../../../theme'
import { RectButton } from 'react-native-gesture-handler'

const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const TITLE: TextStyle = {}

const COUNT_PICKER: ViewStyle = {
  backgroundColor: '#fff',
  flexDirection: 'row',
  borderRadius: 15,
  borderWidth: 1,
  borderColor: color.backGrey,
}

const ITEM: ViewStyle = {
  alignSelf: 'stretch',
  padding: 8,
}

const Count = () => {
  const [count, setCount] = useState(1)
  const a = []
  let i = 1
  while (a.push(i++) < 10);
  const Items = a.map((n, index) => {
    return (
      <View
        style={[
          { overflow: 'hidden' },
          n == 1
            ? { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }
            : n == 10
            ? { borderTopRightRadius: 15, borderBottomRightRadius: 15 }
            : {},
        ]}
        key={'picker-item-' + n}
      >
        <RectButton
          style={[
            n == count
              ? { backgroundColor: color.green }
              : { backgroundColor: '#fff' },
          ]}
          onPress={() => setCount(n)}
        >
          <Text
            style={{ ...ITEM, color: n == count ? color.white : color.black }}
          >
            {n}
          </Text>
        </RectButton>
      </View>
    )
  })
  return (
    <View style={CONTAINER}>
      <Text style={TITLE}>Грузчики</Text>
      <View style={COUNT_PICKER}>{Items}</View>
    </View>
  )
}

export default Count
