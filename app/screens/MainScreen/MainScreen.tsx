import React from 'react'
import { View, ViewStyle } from 'react-native'
import Backdrop from '../../components/MainScreen/Backdrop'
import BottomSheet from 'reanimated-bottom-sheet'
import { useHeaderHeight } from '@react-navigation/stack'
import {
  BottomTabHeight,
  WindowHeight
} from '../../constants/constants'
import Balance from '../../components/MainScreen/Balance/Balance'
import Orders from '../../components/MainScreen/Orders/Orders'
import { color } from '../../theme'
import Other from '../../components/MainScreen/Other/Other'
import { scale } from '../../constants/dimensions'

// DOCUMENTATION
// https://github.com/osdnk/react-native-reanimated-bottom-sheet

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  flex: 1
}

const BOTTOM_HEADER: ViewStyle = {
  height: 10,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: color.white
}

const BOTTOM_SHEET: ViewStyle = {
  backgroundColor: color.backGrey
}

const DIVIDER: ViewStyle = {
  marginBottom: scale(10)
}

const GROUP: ViewStyle = {
  backgroundColor: color.white
}

// COMPONENT
const MainScreen = ({ navigation }: any) => {
  const headerHeight = useHeaderHeight()
  const viewHeight = WindowHeight - headerHeight - BottomTabHeight
  const initialHeight = (viewHeight + 15) * 0.6
  const _renderHeader = () => <View style={BOTTOM_HEADER}></View>
  const _renderContent = () => (
    <View style={BOTTOM_SHEET}>
      <View style={GROUP}>
        <Balance navigation={navigation} />
      </View>
      <View style={DIVIDER}></View>
      <View style={GROUP}>
        <Orders />
      </View>
      <View style={DIVIDER}></View>
      <View style={GROUP}>
        <Other />
      </View>
    </View>
  )

  return (
    <>
      <View style={CONTAINER}>
        <Backdrop />
      </View>
      <BottomSheet
        enabledBottomClamp
        snapPoints={[initialHeight, viewHeight]}
        renderContent={_renderContent}
        renderHeader={_renderHeader}
      />
    </>
  )
}

export default MainScreen
