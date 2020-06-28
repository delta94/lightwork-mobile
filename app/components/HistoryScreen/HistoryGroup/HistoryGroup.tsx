import React from 'react'
import { Text, TextStyle, View, ViewStyle, FlatList } from 'react-native'
import Item from './Item/Item'
import moment from 'moment/min/moment-with-locales'

//STYLES
//ViewStyles
const CONTAINER: ViewStyle = {
    flexDirection: "column",
    alignSelf: "stretch"
}

const HEADER: ViewStyle = {
    paddingHorizontal: 20,
    paddingVertical: 5,
}

//TextStyles
const TEXT_DATE: TextStyle = {
    color: "#888",
    fontFamily: "Lato",
    fontSize: 14,
}

//COMPONENT
const HistoryGroup = (props) => {
    return (
        <View style={CONTAINER}>
            <View style={HEADER}>
                <Text style={TEXT_DATE}>{moment(props.date).locale('ru').format('LL')}</Text>
            </View>
            <FlatList 
                data={props.data}
                renderItem={({item}) => {
                    if (item.date == props.date) {
                        return (
                            <Item
                            type={item.type}
                            key={item.id}
                            id={item.id}
                            price={item.price} 
                            data={props.data}
                            navigation={props.navigation} 
                            activeType={props.activeType}
                            bonusCount={item.bonusCount}
                            duration={item.duration}
                            status={item.status}/>
                        )
                    }
                    else {
                        return <View></View>
                    }
                }}
            />
        </View>
    );
}

export default HistoryGroup;