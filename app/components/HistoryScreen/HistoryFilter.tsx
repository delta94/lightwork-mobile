import React from 'react'
import { View, ViewStyle, TouchableOpacity, Text, TextStyle } from 'react-native';


const CONTAINER: ViewStyle = {
    alignSelf: "auto",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee"
}

const BUTTON = {
    borderRadius: 20,
    marginEnd: 10,
    backgroundColor: "#f4f4f4",
    color: "#000",
}

const ACTIVE_BUTTON: ViewStyle = {
    ...BUTTON,
    backgroundColor: "#ffc606",
    borderColor: "#ffc606",
}

const BUTTON_TEXT: TextStyle = {
    paddingVertical: 10,
    paddingHorizontal: 20,
}


const HistoryFilter = () => {
    return (
        <View style={CONTAINER}>
        
            <TouchableOpacity
                style={ACTIVE_BUTTON}
            >
                <Text style={BUTTON_TEXT}>Все</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={BUTTON}
            >
                <Text style={BUTTON_TEXT}>Грузчики</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={BUTTON}
            >
                <Text style={BUTTON_TEXT}>Мастера</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={BUTTON}
            >
                <Text style={BUTTON_TEXT}>Клининг</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HistoryFilter;