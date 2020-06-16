import  React from 'react'
import { ViewStyle, View, Text, TextStyle  } from 'react-native';
import { color } from '../../../../../theme';

const CONTAINER: ViewStyle = {
    marginBottom: 5,
}

const ROW: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
}

const TEXT: TextStyle = {
    fontSize: 17,
}

const TITLE: TextStyle = {
    ...TEXT,
    fontWeight: "bold",
}

const LINK: TextStyle = {
    ...TEXT,
    fontWeight: "bold",
    color: color.green,
}

const Bonuses = () => {
    return (
        <View style={CONTAINER}>
            <View style={ROW}>
                <Text style={TITLE}>Карты</Text>
                <Text style={LINK}>Все</Text>
            </View>
            <View style={ROW}>
                <Text style={TEXT}>Бонусы</Text>
                <Text style={TEXT}>23</Text>
            </View>
        </View>
    )
}

export default Bonuses;