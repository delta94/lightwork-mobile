import { useHeaderHeight } from '@react-navigation/stack'
import React, { useState, useRef } from 'react'
import { ViewStyle } from 'react-native'
import { View } from 'react-native-animatable'

import Header from '../../components/MapScreen/Header/Header'
import Map from '../../components/MapScreen/Map/Map'
import OrderSheet from '../../components/MapScreen/OrderSheet/OrderSheet'
import { WINDOW_HEIGHT, BOTTOMTAB_HEIGHT } from '../../constants/constants'
import Marker from '../../components/MapScreen/Marker/Marker'
import MarkerShadow from '../../components/MapScreen/MarkerShadow/MarkerShadow'
import { Modalize } from 'react-native-modalize'
import { color } from '../../theme/color'

const CONTAINER: ViewStyle = {
  flex: 1
}

const MapScreen = () => {
  const [isCamChange, setCamChange] = useState(0)
  const HEADER_HEIGHT = useHeaderHeight()
  const VIEW_HEIGHT = WINDOW_HEIGHT - HEADER_HEIGHT - BOTTOMTAB_HEIGHT
  const modalizeRef = useRef<Modalize>(null)

  const _renderHeader = () => {
    return <Header />
  }
  return (
    <View style={{ ...CONTAINER, height: VIEW_HEIGHT }}>
      <Map setCamChange={setCamChange} />
      <Marker isCamChange={isCamChange} />
      <MarkerShadow isCamChange={isCamChange} />
      <Modalize ref={modalizeRef}
        alwaysOpen={200}
        modalHeight={VIEW_HEIGHT * 0.7}
        HeaderComponent={_renderHeader}
        FooterComponent={_renderHeader}
        modalTopOffset={50}
        handleStyle={{ backgroundColor: color.backGrey }}
      >
        <OrderSheet />
      </Modalize>
    </View>
  )
}

export default MapScreen
