import React from 'react'
import { View, ViewStyle } from 'react-native';
import { color } from '../../theme';
import HistoryGroup from '../../components/HistoryScreen/HistoryGroup/HistoryGroup';
import { DATE_FILTER } from '../../constants/filters';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text, Item, Input } from 'native-base';
import HistoryFilter from '../../components/HistoryScreen/HistoryFilter';

const CONTAINER: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: 0,
  alignSelf: 'stretch',
  backgroundColor: color.white
}



const HistoryScreen = (props) => {
  let HistoryGroups = DATE_FILTER(props.data).map(n => <HistoryGroup
    date={n.date}
    key={n.id}
    data={props.data} />);
  return (
    <ScrollView>      
      <View style={CONTAINER}>
        <HistoryFilter />
        {HistoryGroups}
      </View>
    </ScrollView>
  );
}

export default HistoryScreen;