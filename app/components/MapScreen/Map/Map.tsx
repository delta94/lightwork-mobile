import React, { useRef, useState } from 'react'
import { ViewStyle, View } from 'react-native'
import YaMap, { Marker, Geocoder } from 'react-native-yamap'
import IMAGES from '../../../constants/images'

const CONTAINER: ViewStyle = {}

const Map = (props: any) => {
  YaMap.init('c9fe7024-671e-49c8-945c-4b9a87c59902')
  Geocoder.init('40b91bc7-54e7-4f40-9a3c-221c3a00cc02')
  YaMap.setLocale('ru_RU')
  const [activePoint, setPoint] = useState({
    lat: 49.94304358239562,
    lon: 82.62278467147178,
  })
  const [activeZoom, setZoom] = useState(10)
  const [isPressIn, setPressIn] = useState(false)
  const YA_MAP: any = useRef(null)
  const [timerId, setTimerId] = useState()

  const _onMapPress = (p: any) => {
    YA_MAP.current.setCenter(p.nativeEvent, activeZoom, 0, 0, 0.5)
  }
  const _onTouchEnd = () => {
    YA_MAP.current.getCameraPosition((p) => setZoom(p.zoom))
    setPressIn(false)
    props.setCamChange(0)
  }

  const _onTouchStart = () => {
    props.setCamChange(1)
    setPressIn(true)
  }

  const _getGeo = (p: any) => {
    console.log(p)
    Geocoder.geoToAddress(p).then(console.log)
  }

  const _onCameraPositionChange = (p: any) => {
    setPoint(p.nativeEvent.point)

    // CamChanging
    if (timerId) clearTimeout(timerId)

    // CamChangeEnd
    const time = () => {
      _getGeo(activePoint)
      setTimerId(null)
    }

    setTimerId(setTimeout(time, 1000))
  }

  return (
    <YaMap
      onTouchStart={() => _onTouchStart()}
      onTouchEnd={() => _onTouchEnd()}
      ref={YA_MAP}
      userLocationIcon={IMAGES.main.card}
      showUserPosition={true}
      userLocationAccuracyFillColor="#000"
      onCameraPositionChange={(point) => {
        _onCameraPositionChange(point)
      }}
      onMapPress={(point) => {
        _onMapPress(point)
      }}
      style={{ flex: 1 }}
    ></YaMap>
  )
}

export default Map
