import { useHeaderHeight } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ViewStyle, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native-animatable';
import BottomSheet from 'reanimated-bottom-sheet';

import Header from '../../components/MapScreen/Header/Header';
import Map from '../../components/MapScreen/Map/Map';
import OrderSheet from '../../components/MapScreen/OrderSheet/OrderSheet';
import { WindowHeight, BottomTabHeight } from '../../constants/constants';
import { color } from '../../theme';

const CONTAINER: ViewStyle ={
}

  
const BOTTOM_SHEET: ViewStyle = {
    backgroundColor: color.white
}

const MapScreen = () => {
    const headerHeight = useHeaderHeight();
    const viewHeight = WindowHeight - headerHeight - BottomTabHeight
    const _renderHeader = () => {
        return (
            <Header />
        )
    }
    const _renderContent = () => {
        return (
            <OrderSheet />
        )
    }
    return (
       
        <View style={{height: viewHeight}}>
            <Map />     
            <BottomSheet
                snapPoints = {[100, "70%"]}
                renderContent = {_renderContent}
                renderHeader = {_renderHeader} 
                overdragResistanceFactor={0}
            />
        </View>
        
    )
}

export default MapScreen