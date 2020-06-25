import React from "react";
import {Text, View} from "react-native";

const HistoryDetailsScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const { price } = route.params;
    
    return (
        <View>
            <Text>
                {price}
            </Text>
        </View>
    )
}

export default HistoryDetailsScreen;
