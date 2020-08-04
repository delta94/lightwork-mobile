import React, { useRef } from "react"
import { ViewStyle, View } from 'react-native';
import YaMap, { Marker } from 'react-native-yamap';
import IMAGES from '../../../constants/images';

const CONTAINER: ViewStyle = {

}

const Map = () => {
    YaMap.init('c9fe7024-671e-49c8-945c-4b9a87c59902');
    YaMap.setLocale('ru_RU');
    const YA_MAP = useRef(null);
    return (
      
          <YaMap
        ref={YA_MAP}
        userLocationIcon={IMAGES.main.card }
        showUserPosition={true}
        userLocationAccuracyFillColor="#000"
        style={{ flex: 1, marginBottom: 40, }}
      ><Marker point={{lat: 50, lon: 50}}/>
      </YaMap>
        
    )
}

export default Map