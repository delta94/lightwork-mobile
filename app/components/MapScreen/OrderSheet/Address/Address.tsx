import React from "react"
import { ViewStyle, View, Image, ImageStyle } from 'react-native';
import IMAGES from "../../../../constants/images";
import { color } from "../../../../theme";
import { TextField } from 'react-native-material-textfield';


const CONTAINER: ViewStyle = {

}

const ROW: ViewStyle = {
    flexDirection: "row",
    alignItems: "center"
}

const COL: ViewStyle = {
    flexDirection: "column",
    paddingRight: 10,
}

const COL_100: ViewStyle = {
    ...COL,
    flex: 1,
}

const TEXT_FIELD: ViewStyle = {
    paddingLeft: 0,
}

const DIVIDER: ViewStyle = {
    paddingHorizontal: 5,
}

const IMG_TYPE: ImageStyle = {
    width: 35,
    height: 35,
}

const Address = (props: any) => {
    var IMAGE
    var ACTIVE_COLOR
    switch (props.activeType) {
        case 'MASTER':
            IMAGE = IMAGES.order.place.master;
            ACTIVE_COLOR = color.orange
            break;

        case 'CLEANING':
            IMAGE = IMAGES.order.place.cleaning;
            ACTIVE_COLOR = color.blue
            break;

        case "MOVERS":
            IMAGE = IMAGES.order.place.mover;
            ACTIVE_COLOR = color.green
            break;
    }
    return (
        <View style={CONTAINER}>
            <View style={ROW}>
                <View style={COL}>
                    <Image source={IMAGE} style={IMG_TYPE} />
                </View>
                <View style={COL_100}>
                    <TextField 
                        label="Адрес"
                        contentInset={{ top: 0 }}
                        tintColor={ACTIVE_COLOR}
                        containerStyle={TEXT_FIELD}
                    />
                </View>
            </View>
            <View style={ROW}>
                <View style={COL_100}>
                    <TextField 
                        contentInset={{ top: 0 }}
                        tintColor={ACTIVE_COLOR}
                        containerStyle={TEXT_FIELD}
                        label="Кв"
                    />
                </View>
                <View style={DIVIDER}></View>
                <View style={COL_100}>
                    <TextField 
                        contentInset={{ top: 0 }}
                        tintColor={ACTIVE_COLOR}
                        containerStyle={TEXT_FIELD}
                        label="Подъезд"
                    />
                </View>
                <View style={DIVIDER}></View>
                <View style={COL_100}>
                    <TextField
                        contentInset={{ top: 0 }}
                        tintColor={ACTIVE_COLOR}
                        containerStyle={TEXT_FIELD}
                        label="Этаж"
                    />
                </View>
            </View>
        </View>
    )
}

export default Address