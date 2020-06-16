import  React from 'react'
import { ViewStyle, View, Text, TextStyle, Image, ImageStyle } from 'react-native';
import { color } from '../../../../../theme';
import IMAGES from '../../../../../constants/images';

const CONTAINER: ViewStyle = {
    marginVertical: 5,
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

const MUTED: TextStyle = {
    
}

const IMAGE: ImageStyle = {
    width: 35,
    marginRight: 10,
}

const TITLE: TextStyle = {
    ...TEXT,
    fontWeight: "bold",
}

const CODE: TextStyle = {
    ...TEXT,
    color: "#666",
}

const Card = () => {
    return (
        <View style={CONTAINER}> 
            <View style={ROW}>
                <Text style={TITLE}>Карты</Text>
            </View>
            <View style={ROW}>
                <View style={ROW}>
                    <Image style={IMAGE} source={IMAGES.main.card} />
                    <Text>MasterCard Master</Text>
                </View>
                <Text style={CODE}>**** 6589</Text>
            </View>
        </View>
    )
}

export default Card;