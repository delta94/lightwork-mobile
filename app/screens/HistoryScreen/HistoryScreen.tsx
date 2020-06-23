import React from 'react'
import { View, ViewStyle, Text, Button } from 'react-native';
import { color } from '../../theme';
import HistoryGroup from '../../components/HistoryScreen/HistoryGroup/HistoryGroup';
import { DATE_FILTER } from '../../constants/filters';
import { ScrollView, RectButton, BaseButton } from 'react-native-gesture-handler';
import HistoryFilter from '../../components/HistoryScreen/HistoryFilter';

const CONTAINER: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  paddingTop: 0,
  alignSelf: 'stretch',
  backgroundColor: color.white
}


const HistoryScreen = (props) => {
  const HistoryGroups = DATE_FILTER(props.data).map(n => <HistoryGroup
    date={n.date}
    key={n.id}
    data={props.data} />);
  return (
    <ScrollView>      
      <View style={CONTAINER}>
        <HistoryFilter />
        <Button
          title="Go to Details"
          onPress={() => props.navigation.navigate('Details')}
        />
        {HistoryGroups}
      </View>
    </ScrollView>
  );
}

export default HistoryScreen;