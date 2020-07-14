import React from "react"
import { ViewStyle } from 'react-native';
import MapView from "react-native-maps";

const CONTAINER: ViewStyle = {

}

const Map = () => {
    return (
        <MapView
                style={{
                    flex: 1,
                }}
                initialRegion={{
                    latitude: 49.957579,
                    longitude: 82.597765,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            >
        </MapView>
    )
}

export default Map