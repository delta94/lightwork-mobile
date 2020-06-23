import React, { useState } from 'react'
import { Text, TextStyle, View, ViewStyle, ImageStyle, Image } from 'react-native';
import { color } from '../../../theme';
import { RectButton } from 'react-native-gesture-handler';
import moment from 'moment/min/moment-with-locales'
import IMAGES from '../../../constants/images';

//DOCUMENTATION
//https://momentjs.com/
//https://reactnative.dev/docs/touchablewithoutfeedback

//STYLES
//ViewStyle
const CONTAINER: ViewStyle = {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: "#f4f4f4"
}

const IMAGE_VIEW: ViewStyle = {
    backgroundColor: "#f4f4f4",
    borderRadius: 100,
    padding: 7,
    alignSelf: "flex-start",
    borderColor: "#e8e8e8",
    borderWidth: 1,
}

const IMAGE: ImageStyle = {
    width: 25,
    height: 25,
}

const ROW: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#f4f4f4",
    justifyContent: "space-between",
}

const ROW_LEFT: ViewStyle = {
    justifyContent: "center",
    flexDirection: "row"
}

const ROW_RIGHT: ViewStyle = {
    alignSelf: "flex-start",
    flexDirection: "row",
}

const TEXT_VIEW: ViewStyle = {
    paddingLeft: 10,
}

//TextStyle
const TEXT_SERVICE: TextStyle = {
    color: "#565656",
    fontSize: 17,
    marginTop: 0,
    fontFamily: "Lato-Bold",
}

const TEXT_DATE: TextStyle = {
    color: "#777",
    fontSize: 14,
    paddingBottom: 5,
}

const BONUS_COUNT: TextStyle = {
    fontSize: 17,
    fontFamily: "Lato-Bold",
    color: color.green,
    
}

const BONUS_SYMBOL: TextStyle = {
    ...BONUS_COUNT,
    fontSize: 11,
    borderColor: color.green,
    borderTopWidth: 2,
    alignSelf: "flex-end"
}

//COMPONENT
const Item = (props) => {
    const [isPressIn, setPressIn] = useState(false);

    var TYPE;
    switch (props.type) {
        case 'MASTER':
            TYPE = "Заказ мастера";
            break;

        case 'CLEANING':
            TYPE = "Заказ клинеров";
            break;

        case "MOVERS":
            TYPE = "Заказ грузчиков";
            break;
    }

    return (
        <View style={CONTAINER}>
            <RectButton 
                style={ROW}>
                    <View style={ROW_LEFT}>
                        <View style={IMAGE_VIEW}>
                            <Image style={IMAGE} source={IMAGES.history.dark} />
                        </View>
                        <View style={TEXT_VIEW}>
                            <Text style={TEXT_SERVICE}>Накопление Бонусов</Text>
                            <Text style={TEXT_DATE}>{TYPE} {moment(props.date).locale('ru').format('LL')}</Text>
                        </View>
                    </View>
                    <View style={ROW_RIGHT}>
                        <Text style={BONUS_COUNT}> + {props.bonusCount} </Text>
                        <Text style={BONUS_SYMBOL}>Б</Text>
                    </View>
            </RectButton>
        </View>
    );
}

export default Item;