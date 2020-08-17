import { useHeaderHeight } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ViewStyle, Image } from 'react-native';
import { View } from 'react-native-animatable';
import BottomSheet from 'reanimated-bottom-sheet';

import Header from '../../components/MapScreen/Header/Header';
import Map from '../../components/MapScreen/Map/Map';
import OrderSheet from '../../components/MapScreen/OrderSheet/OrderSheet';
import { WindowHeight, BottomTabHeight } from '../../constants/constants';
import { color } from '../../theme';
import {  } from 'native-base';
import IMAGES from '../../constants/images';
import Marker from '../../components/MapScreen/Marker/Marker';
import MarkerShadow from '../../components/MapScreen/MarkerShadow/MarkerShadow';

const CONTAINER: ViewStyle ={
}

  
const BOTTOM_SHEET: ViewStyle = {
    backgroundColor: color.white
}

const MapScreen = () => {
    const [isCamChange, setCamChange] = useState(0)
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
            <Map
                setCamChange={setCamChange} 
            />  
            <Marker 
                isCamChange={isCamChange}
            />
            <MarkerShadow
                isCamChange={isCamChange} 
            />
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