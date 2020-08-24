import React from 'react'
import { ViewStyle, View, Image, Text, TextStyle, FlatList } from 'react-native'
import IMAGES from '../../../../constants/images'
import { color } from '../../../../theme'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { scale } from '../../../../constants/dimensions'

const CONTAINER: ViewStyle = {
  paddingVertical: scale(10)
}

const ROW: ViewStyle = {
  flexDirection: 'row',
  alignContent: 'flex-start',
  marginTop: scale(10)
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
  alignItems: 'center'
}

const TITLE: TextStyle = {
  fontSize: 14
}

const TEXT: TextStyle = {
  textAlign: 'center',
  textAlignVertical: 'center'
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
  marginRight: scale(10),
  marginTop: scale(10),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  backgroundColor: color.backGrey,
  alignSelf: 'flex-end'
}

const DATA = [
  {
    id: 1,
    title: 'Грузчики и разнорабочие',
    color: color.green,
    type: 'MOVERS',
    image: IMAGES.order.type.mover
  },
  {
    id: 2,
    title: 'Мастер на час',
    color: color.orange,
    type: 'MASTER',
    image: IMAGES.order.type.master
  },
  {
    id: 3,
    title: 'Клининг',
    color: color.blue,
    type: 'CLEANING',
    image: IMAGES.order.type.cleaning
  }
]

const OrderType = (props: any) => {
  return (
    <View style={CONTAINER}>
      <Text style={TITLE}>Выберите направление</Text>
      <View style={ROW}>
        <FlatList
          data={DATA}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  { ...COL },
                  index === 1
                    ? { marginHorizontal: 5 }
                    : index === 0
                      ? { marginRight: 5 }
                      : { marginLeft: 5 }
                ]}
              >
                <TouchableWithoutFeedback
                  style={CARD}
                  onPress={() => {
                    props.setType(item.type)
                  }}
                >
                  <View
                    style={{
                      ...STATUS,
                      backgroundColor:
                        props.activeType === item.type
                          ? item.color
                          : color.backGrey
                    }}
                  >
                    <Image
                      source={
                        props.activeType === item.type
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

export default OrderType
