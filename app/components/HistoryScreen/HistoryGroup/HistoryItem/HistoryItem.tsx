import React from 'react'
import { Text, TextStyle, View, ViewStyle, Image, ImageStyle } from 'react-native';
import IMAGES from '../../../../constants/images';
import { color } from '../../../../theme/color';

const TEXT: TextStyle = {
    fontFamily: "Lato"
}

let IMAGE_STYLE: ViewStyle = {
    borderRadius: 100,
    backgroundColor: "#E2FFBB",
    padding: 7,
}

const TEXT_DATE: TextStyle = {
    ...TEXT,
    color: "#666",
    fontSize: 15,
}

const TYPE_ROW: ViewStyle = {
    marginLeft: 4,
}

const ROW: ViewStyle = {
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}

const TYPE_IMAGE: ImageStyle = {
    width: 25,
    height: 25,
}

const CONTAINER: ViewStyle = {
    alignItems: "stretch",
    flexDirection: "column",
}

const ROW_LEFT: ViewStyle = {
    flexDirection: "row",
    alignItems: "center"
}

const PRICE_ROW: ViewStyle = {
}

let HistoryItem = (props) => {
    var TYPE;
    var IMAGE;
    switch (props.type) {
        case 'MASTER':
            TYPE = "Заказ Мастера";
            IMAGE = IMAGES.history.master;
            IMAGE_STYLE = {
                ...IMAGE_STYLE,
                backgroundColor: color.orangeLight,
            }
            break;

        case 'CLEANING':
            TYPE = "Заказ Клинеров";
            IMAGE = IMAGES.history.cleaning;
            IMAGE_STYLE = {
                ...IMAGE_STYLE,
                backgroundColor: color.blueLight,
            }
            break;

        case "MOVERS":
            TYPE = "Заказ Грузчиков";
            IMAGE = IMAGES.history.mover;
            IMAGE_STYLE = {
                ...IMAGE_STYLE,
                backgroundColor: color.greenLight,
            }
            break;
    }

    return (
        <View style={CONTAINER}>
            <View style={ROW}>
                <View style={ROW_LEFT}>
                    <View style={IMAGE_STYLE}>
                        <Image style={TYPE_IMAGE} source={IMAGE} />
                    </View>
                    <View style={TYPE_ROW}>
                        <Text style={TEXT_DATE}>{TYPE}</Text>
                    </View>
                </View>
                <View style={PRICE_ROW}>
                    <Text >{props.price} ₸</Text>
                </View>
            </View>
        </View>
    );
}

export default HistoryItem;