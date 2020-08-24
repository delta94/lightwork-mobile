import React, { useState } from 'react'
import { ViewStyle, View, Image, Text, TextStyle, FlatList } from 'react-native'
import IMAGES from '../../../../../constants/images'
import { color } from '../../../../../theme'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { scale } from '../../../../../constants/dimensions'

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignContent: 'flex-start',
  marginVertical: scale(10)
}

const COL: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'stretch',
  flex: 1,
  borderColor: color.backGrey,
  borderWidth: 1,
  borderRadius: 10
}

const CARD: ViewStyle = {
  alignItems: 'center',
  paddingTop: scale(15)
}

const TEXT_VIEW: ViewStyle = {
  flexDirection: 'column',
  alignContent: 'stretch',
  paddingTop: scale(5),
  paddingBottom: scale(10)
}

const STATUS: ViewStyle = {
  height: 22,
  width: 22,
  right: 10,
  marginTop: scale(10),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  backgroundColor: color.backGrey,
  alignSelf: 'flex-end',
  position: 'absolute'
}

// TextStyles
const TEXT: TextStyle = {
  textAlign: 'center',
  textAlignVertical: 'center'
}

const DATA = [
  {
    id: 1,
    title: 'Lite',
    size: 3,
    image: IMAGES.order.type.mover
  },
  {
    id: 2,
    title: 'Pro',
    size: 4,
    image: IMAGES.order.type.mover
  }
]

const Type = () => {
  const [activeType, setType] = useState('Lite')
  return (
    <View style={CONTAINER}>
      <View style={ROW}>
        <FlatList
          data={DATA}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  { ...COL },
                  index === 0 ? { marginRight: scale(5) } : { marginLeft: scale(5) }
                ]}
              >
                <TouchableWithoutFeedback
                  style={CARD}
                  onPress={() => {
                    setType(item.title)
                  }}
                >
                  <View
                    style={{
                      ...STATUS,
                      backgroundColor:
                        activeType === item.title ? color.blue : color.backGrey
                    }}
                  >
                    <Image
                      source={
                        activeType === item.title
                          ? IMAGES.order.type.tick
                          : undefined
                      }
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                  <Image source={item.image} />
                  <View style={TEXT_VIEW}>
                    <Text style={TEXT}>{item.title}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Type
