import React from 'react'
import { ViewStyle } from 'react-native'
import { View } from 'native-base'
import Header from './Header/Header'
import Item from './Item/Item'

const CONTAINER: ViewStyle = {

}

const initialState = [
  { id: 1, type: 'MOVERS', bonusCount: 30, date: '11/25/2019', price: 3000 },
  { id: 2, type: 'MASTER', bonusCount: 21, date: '11/25/2019', price: 2500 },
  { id: 3, type: 'CLEANING', bonusCount: 60, date: '11/25/2019', price: 5000 }
]

const Orders = (props) => {
  const Items = initialState.map(n => {
    return <Item
      type={n.type}
      key={n.id}
      price={n.price} />
  })
  return (
    <View style={CONTAINER}>
      <Header />
      {Items}
    </View>
  )
}

export default Orders
