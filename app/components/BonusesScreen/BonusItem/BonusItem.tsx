import React from 'react'
import { Text, TextStyle, View, ViewStyle, ShadowPropTypesIOS } from 'react-native';

const TEXT: TextStyle = {
    fontFamily: "Lato"
}

const TEXT_SERVICE: TextStyle = {
    ...TEXT,
    fontFamily: "Lato-Bold",
    color: "#444",
    fontSize: 16,
}

const TEXT_DATE: TextStyle = {
    ...TEXT,
    color: "#777",
    fontSize: 15,
}

let BONUS_COUNT: TextStyle = {
    ...TEXT,
    fontSize: 40,
    fontFamily: "Lato-Bold",
    color: "#6cc769",
}

const ROW: ViewStyle = {
    marginBottom: 7,
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignSelf: 'stretch',
}

const ROW_LEFT: ViewStyle = {
    flex: 1,
    justifyContent: "center",
}

const ROW_RIGHT: ViewStyle = {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
}

let BonusItem = (props) => {

    return (
        <View style={ROW}>
            <View style={ROW_LEFT}>
                <Text style={TEXT_DATE}>26 ноября 2019 г.</Text>
                <Text style={TEXT_SERVICE}>{props.type}</Text>
            </View>
            <View style={ROW_RIGHT}>
                <Text style={BONUS_COUNT}> +{props.count}</Text>
            </View>
        </View>
    );
}

export default BonusItem;