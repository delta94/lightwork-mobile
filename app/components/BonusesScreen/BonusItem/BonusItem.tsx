import React, { useState } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { color } from '../../../theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import moment from 'moment/min/moment-with-locales'

//DOCUMENTATION
//https://momentjs.com/
//https://reactnative.dev/docs/touchablewithoutfeedback

//STYLES
//ViewStyle
const CONTAINER: ViewStyle = {
    flexDirection: "column",
}

const ROW: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#f4f4f4",
    justifyContent: "space-between"
}

const ROW_LEFT: ViewStyle = {
    justifyContent: "center",
}

const ROW_RIGHT: ViewStyle = {
    alignItems: "flex-end",
    justifyContent: "center",
}

//TextStyle
const TEXT_SERVICE: TextStyle = {
    color: "#444",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold"
}

const TEXT_DATE: TextStyle = {
    color: "#777",
    fontSize: 15,
    paddingBottom: 5,
}

const BONUS_COUNT: TextStyle = {
    fontSize: 25,
    color: color.green,
    fontWeight: "bold"
    
}

//COMPONENT
const BonusItem = (props) => {
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
            <TouchableWithoutFeedback
                onPressIn={() => setPressIn(!isPressIn)}
                onPressOut={() => setPressIn(!isPressIn)}
                style={{...ROW, backgroundColor: (isPressIn ? "#f2f2f2" : "#fff")}}>
                    <View style={ROW_LEFT}>
                        <Text style={TEXT_SERVICE}>{TYPE}</Text>
                        <Text style={TEXT_DATE}>{moment(props.date).locale('ru').format('LL')}</Text>
                    </View>
                    <View style={ROW_RIGHT}>
                        <Text style={BONUS_COUNT}> +{props.count}</Text>
                    </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default BonusItem;