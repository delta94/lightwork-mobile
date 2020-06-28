import React, { useState } from 'react'
import { View, ViewStyle, ScrollView  } from 'react-native';
import HistoryGroup from '../../components/HistoryScreen/HistoryGroup/HistoryGroup';
import { DATE_FILTER, TYPE_FILTER } from '../../constants/filters';
import HistoryFilter from '../../components/HistoryScreen/HistoryFilter';

//STYLES
//ViewStyles
const CONTAINER: ViewStyle = {
  flexDirection: "column",
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  paddingTop: 0,
  alignSelf: 'stretch',
}

//COMPONENT
const HistoryScreen = (props: any) => {
  const [value, setValue] = useState("ALL");
  const FILTERED_DATA = TYPE_FILTER(props.data, value)
  const HistoryGroups = DATE_FILTER(FILTERED_DATA).map(n => {
      return (
        <HistoryGroup
        date={n.date}
        key={n.id}
        data={FILTERED_DATA} 
        navigation={props.navigation}
        activeType={value} />
      )
  });
  return (
    <ScrollView>      
      <View style={CONTAINER}>
        <HistoryFilter setValue={setValue}/>
        {HistoryGroups}
      </View>
    </ScrollView>
  );
}

export default HistoryScreen;