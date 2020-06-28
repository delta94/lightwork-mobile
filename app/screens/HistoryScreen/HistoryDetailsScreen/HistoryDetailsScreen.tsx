import React from "react";
import { Text, View, ViewStyle, TextStyle, Image, ImageStyle } from 'react-native';
import moment from 'moment/min/moment-with-locales'
import IMAGES from '../../../constants/images';
import Status from "../../../components/HistoryDetailsScreen/Status/Status";

//STYLES
//ViewStyles
const CONTAINER: ViewStyle = {
    backgroundColor: "#fff",
    flexDirection: "column",
    alignSelf: "stretch",
    flex: 1,
    paddingVertical: 20,
}

const ROW: ViewStyle = {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    paddingLeft: 20,
    marginVertical: 10,
    alignItems: "flex-end"
}

const ITEM_IMAGE: ViewStyle = {
    paddingVertical: 4,
}

const ITEM: ViewStyle = {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    width: "100%",
    marginLeft: 20,
}

//TextStyles
const TEXT_TITLE: TextStyle = {
    fontSize: 16,
    color: "#555",
}

const TEXT_DESCR: TextStyle = {
    fontSize: 18,
    paddingBottom: 2,
}

//ImageStyles
const IMG_TYPE: ImageStyle = {
    width: 30,
    height: 30,
}

//COMPONENT
const HistoryDetailsScreen = (props: any) => {
    const { itemId, 
            status,
            duration,
            price, 
            bonusCount,
            type,
            date  } = props.route.params;
    let TYPE
    let TYPE_IMAGE
    switch (type) {
        case 'MASTER':
            TYPE = "Заказ мастера";
            TYPE_IMAGE = IMAGES.history.details.type.master
            break;

        case 'CLEANING':
            TYPE = "Заказ клинеров";
            TYPE_IMAGE = IMAGES.history.details.type.cleaning
            break;

        case "MOVERS":
            TYPE = "Заказ грузчиков";
            TYPE_IMAGE = IMAGES.history.details.type.mover
            break;
    }
    const DATA = [
        {
            title: "Описание",
            descr: TYPE,
            image: TYPE_IMAGE
        },
        {
            title: "Бонусы",
            descr: bonusCount + " Б",
            image: IMAGES.history.details.bonuses,
        },
        {
            title: "Сумма списания",
            descr: price + " ₸",
            image: IMAGES.history.details.money,
        },
        {
            title: "Длительность заказа",
            descr: duration,
            image: IMAGES.history.details.duration,
        },
        {
            title: "Дата",
            descr: moment(date).locale('ru').format('LL'),
            image: IMAGES.history.details.date,
        }
    ]
    const ITEMS = DATA.map(n => {
        return (
            <View style={ROW} key={itemId}>
                <View style={ITEM_IMAGE}>
                    <Image source={n.image} style={IMG_TYPE}/>
                </View>
                <View style={ITEM}>
                    <Text style={TEXT_TITLE}>
                        {n.title}
                    </Text>
                    <Text style={TEXT_DESCR}>
                        {n.descr}
                    </Text>
                </View>
            </View>
                
        )
    })
    return (
        <View style={CONTAINER}>
            <Status status={status}/>
            {ITEMS}
        </View>
    )
}

export default HistoryDetailsScreen;
