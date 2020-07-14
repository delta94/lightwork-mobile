import React, { useState } from "react"
import { ViewStyle, Text } from 'react-native';
import { View } from "react-native-animatable";
import MapView, { Marker } from 'react-native-maps';
import Map from "../../components/MapScreen/Map/Map";
import OrderSheet from "../../components/MapScreen/OrderSheet/OrderSheet";
import BottomSheet from 'reanimated-bottom-sheet';
import { color } from "../../theme";

const CONTAINER: ViewStyle ={
    flex: 1,
}

const BOTTOM_HEADER: ViewStyle = {
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff"
  }
  
const BOTTOM_SHEET: ViewStyle = {
    backgroundColor: color.white
}

const MapScreen = () => {
    const _renderHeader = () => {
        return (
            <View style={BOTTOM_HEADER}></View>
        )
    }
    const _renderContent = () => {
        return (
            <View style={BOTTOM_SHEET}>
                <Text>Text</Text>
            </View>
        )
    }
    return (
        <View style={CONTAINER}>
            <Map />
            <BottomSheet 
            snapPoints = {[100, 400]}
            renderContent = {_renderContent}
            renderHeader = {_renderHeader} 
            />
        </View>
    )
}

export default MapScreen