import React, { useState } from 'react'
import { View, ViewStyle } from 'react-native'

import Address from './Address/Address'
import OrderType from './OrderType/OrderType'
import TypeCleaning from './TypeCleaning/TypeCleaning'
import TypeMaster from './TypeMaster/TypeMaster'
import TypeMover from './TypeMover/TypeMover'
import { scale } from '../../../constants/dimensions'

const CONTAINER: ViewStyle = {
  backgroundColor: '#fff',
  paddingHorizontal: scale(20),
  paddingVertical: scale(10)
}

const OrderSheet = () => {
  const [activeType, setType] = useState('MOVERS')

  let OrderOptions
  if (activeType === 'CLEANING') {
    OrderOptions = <TypeCleaning />
  } else if (activeType === 'MASTER') {
    OrderOptions = <TypeMaster />
  } else if (activeType === 'MOVERS') {
    OrderOptions = <TypeMover />
  }

  return (
    <View style={CONTAINER}>
      <Address activeType={activeType} />
      <OrderType activeType={activeType} setType={setType} />
      {OrderOptions}
    </View>
  )
}

export default OrderSheet
