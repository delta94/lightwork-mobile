import React, { useState, useEffect } from 'react'
import { ViewStyle, View, Image, ImageStyle, Animated } from 'react-native'
import IMAGES from '../../../constants/images'
import Header from '../../MainScreen/Other/Header/Header'

const MARKER_WIDTH = 20

const CONTAINER: ViewStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: MARKER_WIDTH,
  width: MARKER_WIDTH,
  transform: [
    { translateX: -MARKER_WIDTH / 2 },
    { translateY: -MARKER_WIDTH / 2 }
  ]
}

const IMG: ImageStyle = {
  height: '100%',
  width: '100%'
}

const MarkerShadow = (props: any) => {
  const [value] = useState(new Animated.Value(props.isCamChange))

  useEffect(() => {
    Animated.timing(value, {
      toValue: props.isCamChange,
      duration: 500
    }).start()
  }, [props.isCamChange])

  const shadowSize = value.interpolate({
    inputRange: [0, 1],
    outputRange: [MARKER_WIDTH, MARKER_WIDTH * 3]
  })

  const shadowTranslate = value.interpolate({
    inputRange: [0, 1],
    outputRange: [-MARKER_WIDTH / 2, (-MARKER_WIDTH * 3) / 2]
  })

  return (
    <Animated.View
      style={{
        ...CONTAINER,
        width: shadowSize,
        height: shadowSize,
        transform: [
          { translateX: shadowTranslate },
          { translateY: shadowTranslate }
        ]
      }}
    >
      <Image source={IMAGES.order.map.shadow} style={IMG} />
    </Animated.View>
  )
}

export default MarkerShadow
