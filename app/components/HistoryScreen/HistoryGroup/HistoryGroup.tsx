import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import HistoryItem from './HistoryItem/HistoryItem'
import moment from 'moment/min/moment-with-locales'
const TEXT: TextStyle = {
    fontFamily: "Lato-Bold"
}

const TEXT_DATE: TextStyle = {
    ...TEXT, 
    color: "#333",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10
}

const ROW: ViewStyle = {
    marginVertical: 7,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "stretch"
}

const HistoryGroup = (props) => {
    let HistoryItems = props.data.map(n => {
        if (n.date == props.date) return <HistoryItem
            type={n.type}
            key={n.id}
            price={n.price} />
    })
    return (
        <View style={ROW}>
            <Text style={TEXT_DATE}>{moment(props.date).locale('ru').format('LL')}</Text>

            {HistoryItems}
        </View>
    );
}

export default HistoryGroup;