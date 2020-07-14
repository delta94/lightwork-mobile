import React from "react"
import { ViewStyle, View, Text  } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { color } from "../../../theme";

const CONTAINER: ViewStyle ={

}



const OrderSheet = () => {
    const _renderHeader = () => {
        return (
            <View></View>
        )
    }
    const _renderContent = () => {
        return (
            <View style={{height: 200, backgroundColor: "#fff"}}>
                <Text>Text</Text>
            </View>
        )
    }
    return (
        <View>
            <BottomSheet 
            snapPoints = {[100, 400]}
            renderContent = {_renderContent}
            renderHeader = {_renderHeader} 
            />
        </View>
    )
}

export default OrderSheet 