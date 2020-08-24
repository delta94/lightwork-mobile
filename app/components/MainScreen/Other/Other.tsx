import React from 'react'
import { ViewStyle } from 'react-native'
import { View } from 'react-native-animatable'
import IMAGES from '../../../constants/images'
import Item from './Item/Item'
import Header from './Header/Header'

const CONTAINER: ViewStyle = {}

const DATA = [
  {
    id: '1',
    title: 'Помощь',
    text: 'Ответы на распространенные вопросы',
    image: IMAGES.main.help
  },
  {
    id: '2',
    title: 'Стать исполнителем',
    text: 'Начать принимать заказы прямо сейчас',
    image: IMAGES.main.offer
  },
  {
    id: '3',
    title: 'Связь с нами',
    text: 'Напишите нам прямо сейчас',
    image: IMAGES.main.chat
  }
]

const Other = () => {
  const Items = DATA.map((n) => {
    return <Item id={n.id} title={n.title} text={n.text} image={n.image} key={'other-item-' + n.id} />
  })
  return (
    <View style={CONTAINER}>
      <Header />
      {Items}
    </View>
  )
}

export default Other
