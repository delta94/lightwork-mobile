import React, { useState } from 'react'
import { Text, TextStyle, View, ViewStyle, ShadowPropTypesIOS, TouchableHighlight } from 'react-native';
import { color } from '../../../theme';

const CONTAINER: ViewStyle = {
    flexDirection: "column",
    flex: 1,
    alignSelf: "stretch"
}

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

let BONUS_COUNT: TextStyle = {
    fontSize: 35,
    color: color.green,
    fontWeight: "bold"
    
}

const ROW: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingVertical: 15,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: "#f4f4f4",
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

const BonusItem = (props) => {
    return (
        <TouchableHighlight>
        <View style={CONTAINER}>
            <View style={ROW}>
                
                <View style={ROW_LEFT}>
                    <Text style={TEXT_SERVICE}>{props.type}</Text>
                    <Text style={TEXT_DATE}>26 ноября 2019 г.</Text>
                </View>
                <View style={ROW_RIGHT}>
                    <Text style={BONUS_COUNT}> +{props.count}</Text>
                </View>
                
            </View>
            
        </View>
        </TouchableHighlight>
    );
}

export default BonusItem;