import React, { useState } from "react"
import { ViewStyle, View, Image, Text, TextStyle, FlatList } from 'react-native';
import IMAGES from "../../../../../constants/images";
import { color } from "../../../../../theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const CONTAINER: ViewStyle = {
}

const ROW: ViewStyle = {
    flexDirection: "row",
    alignContent: "flex-start",
    marginVertical: 10,
}

const COL: ViewStyle = {
    flexDirection: "column",
    alignItems: "stretch",
    flex: 1,
    borderColor: color.backGrey,
    borderWidth: 1,
    borderRadius: 10,
}

const CARD: ViewStyle = {
    alignItems: "center",
    paddingTop: 15,
}

const TITLE: TextStyle = {
    fontSize: 14
}

const TEXT: TextStyle = {
    textAlign: "center",
    textAlignVertical: "center",
}

const TEXT_VIEW: ViewStyle = {
    flexDirection: "column",
    alignContent: "stretch",
    paddingTop: 5,
    paddingBottom: 10,
}

const STATUS: ViewStyle = {
    height: 22,
    width: 22,
    right: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: color.backGrey,
    alignSelf: "flex-end",
    position: "absolute"
}

const DATA = [
    {
        id: 1,
        title: "Lite",
        size: 3,
        image: IMAGES.order.type.mover
    },
    {
        id: 2,
        title: "Pro",
        size: 4,
        image: IMAGES.order.type.mover
    }
]

const Type = (props: any) => {
    const [activeType, setType] = useState("Lite");
    return (
        <View style={CONTAINER}>
            <View style={ROW}>
                <FlatList 
                    data={DATA}
                    numColumns={3}
                    renderItem={({item, index}) => {
                        return (
                            <View style={[{...COL}, index == 0 
                                ? { marginRight: 5 } 
                                : { marginLeft: 5 }]}>
                                <TouchableWithoutFeedback style={CARD} onPress={() => {setType(item.title)}}>
                                    <View style={{...STATUS, backgroundColor: (activeType == item.title ? color.blue : color.backGrey)}}>
                                        <Image source={(activeType == item.title ? IMAGES.order.type.tick : undefined)} style={{width: 20, height: 20,}}/>
                                    </View>

                                    <Image source={item.image} />
                                    <View style={TEXT_VIEW}>
                                        <Text style={TEXT}>{item.title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Type