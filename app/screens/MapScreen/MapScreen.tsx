import { useHeaderHeight } from '@react-navigation/stack'
import React, { useState } from 'react'
import { ViewStyle } from 'react-native'
import { View } from 'react-native-animatable'
import BottomSheet from 'reanimated-bottom-sheet'

import Header from '../../components/MapScreen/Header/Header'
import Map from '../../components/MapScreen/Map/Map'
import OrderSheet from '../../components/MapScreen/OrderSheet/OrderSheet'
import { WINDOW_HEIGHT, BOTTOMTAB_HEIGHT } from '../../constants/constants'
import Marker from '../../components/MapScreen/Marker/Marker'
import MarkerShadow from '../../components/MapScreen/MarkerShadow/MarkerShadow'

const CONTAINER: ViewStyle = {
  flex: 1
}

const MapScreen = () => {
  const [isCamChange, setCamChange] = useState(0)
  const HEADER_HEIGHT = useHeaderHeight()
  const VIEW_HEIGHT = WINDOW_HEIGHT - HEADER_HEIGHT - BOTTOMTAB_HEIGHT
  const _renderHeader = () => {
    return <Header />
  }
  const _renderContent = () => {
    return <OrderSheet />
  }
  return (
    <View style={{ ...CONTAINER, height: VIEW_HEIGHT }}>
      <Map setCamChange={setCamChange} />
      <Marker isCamChange={isCamChange} />
      <MarkerShadow isCamChange={isCamChange} />
      <BottomSheet
        snapPoints={[100, '70%']}
        renderContent={_renderContent}
        renderHeader={_renderHeader}
        overdragResistanceFactor={0}
      />
    </View>
  )
}

export default MapScreen
