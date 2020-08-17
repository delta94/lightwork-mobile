import React, { useState, useEffect } from "react"
import { ViewStyle, View, Image, ImageStyle, Animated, Button } from 'react-native';
import { color } from "../../../theme";
import IMAGES from "../../../constants/images";

const MARKER_WIDTH = 60

const CONTAINER: ViewStyle = {
    position: "absolute", 
    top: "50%",  
    left: "50%", 
    height: MARKER_WIDTH, 
    width: MARKER_WIDTH,
    transform: [
        {translateX: - MARKER_WIDTH / 2},
        {translateY: - MARKER_WIDTH},
    ]
}

const IMG: ImageStyle = {
    height: "100%", 
    width: "100%"
}

const Marker = (props: any) => {
    const [value] = useState(new Animated.Value(props.isCamChange))

    useEffect(()=>{
        Animated.timing(value, {
            toValue: props.isCamChange,
            duration: 500,
        }).start()
        }, [props.isCamChange]) 
        
    const translateY = value.interpolate({
        inputRange: [0, 1],
        outputRange: [- MARKER_WIDTH, - MARKER_WIDTH * 1.2],
    })
    
    return (
        <Animated.View style={{...CONTAINER, translateY: translateY }}>
            <Image source={IMAGES.order.map.marker} style={IMG} />
        </Animated.View>
    )
}

export default Marker