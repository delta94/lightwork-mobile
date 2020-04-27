import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import HistoryItem from './HistoryItem/HistoryItem';
import moment from 'moment/min/moment-with-locales';

const TEXT: TextStyle = {

}

const TEXT_DATE: TextStyle = {
    ...TEXT,
    color: "#666",
    fontSize: 15,
}

const ROW: ViewStyle = {
    marginBottom: 7,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "stretch"
}

let HistoryGroup = (props) => {
    let HistoryItems = props.data.map(n => {
        if (n.date == props.date) return <HistoryItem
            type={n.type}
            key={n.id}
            price={n.price} />
    })
    return (
        <View style={ROW}>
            <Text style={TEXT_DATE}>{moment(props.date).lang("ru").format("LL")}</Text>

            {HistoryItems}
        </View>
    );
}

export default HistoryGroup;