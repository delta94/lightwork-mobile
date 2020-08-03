import React from "react"
import { ViewStyle, View } from 'react-native';
import YaMap, { Marker } from 'react-native-yamap';


const CONTAINER: ViewStyle = {

}

const Map = () => {
    YaMap.init('c9fe7024-671e-49c8-945c-4b9a87c59902');
    return (
        <YaMap
        userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
        showUserPosition={true}
        style={{ flex: 1, marginBottom: 40, }}
      ><Marker point={{lat: 50, lon: 50}}/>
      </YaMap>
    )
}

export default Map