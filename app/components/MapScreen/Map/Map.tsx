import React, { useRef, useState } from "react"
import { ViewStyle, View } from 'react-native';
import YaMap, { Marker } from 'react-native-yamap';
import IMAGES from '../../../constants/images';

const CONTAINER: ViewStyle = {

}

const Map = () => {
    YaMap.init('c9fe7024-671e-49c8-945c-4b9a87c59902');
    YaMap.setLocale('ru_RU');
    const YA_MAP = useRef(null);
    const [activePoint, setPoint] = useState({"lat": 0, "lon": 0});
    const _onMapPress = (p: any) => {
      setPoint(p);
      console.log(activePoint)
      YA_MAP.current.setCenter(p, 10, 0, 0, 0.5)
    }

    const _onLongMapPress = (p: any) => {
      console.log(p)
      setPoint(p);
    }
    return (
      <YaMap
        ref={YA_MAP}
        userLocationIcon={IMAGES.main.card }
        showUserPosition={true}
        userLocationAccuracyFillColor="#000"
        onMapPress={(point) => {_onMapPress(point.nativeEvent)}}
        onMapLongPress={(point) => {_onLongMapPress(point.nativeEvent)}}
        style={{ flex: 1, marginBottom: 40, }}
      >
        <Marker point={activePoint}/>
      </YaMap>
    )
}

export default Map