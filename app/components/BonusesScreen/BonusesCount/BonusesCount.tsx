import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native';


const CONTAINER: ViewStyle = {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
    paddingBottom: 5,
    flex: 100,
    alignSelf: 'stretch',
}

const TEXT: TextStyle = {
    fontFamily: "Lato",
}

const BONUS_COUNT: TextStyle = {
    ...TEXT,
    color: "#444",
    fontSize: 52,
    fontWeight: "500",
    fontFamily: "Lato-Bold"
}

const TEXT_MUTED: TextStyle = {
    ...TEXT,
    color: "#666",
    fontSize: 16,
}

let BonusesCount = () => {
    return (
        <View style={CONTAINER}>
            <Text style={BONUS_COUNT}>35 990</Text>
            <Text style={TEXT_MUTED}>Заказывая услуги в компании Lightwork Вы возвращаете 1% с каждого заказа</Text>
        </View>
    );
}

export default BonusesCount;