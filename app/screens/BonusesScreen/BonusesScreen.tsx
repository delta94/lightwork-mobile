import React from 'react'
import { View, ViewStyle, FlatList, Button } from 'react-native';
import BonusItem from '../../components/BonusesScreen/Item/Item';
import Balance from '../../components/BonusesScreen/Balance/Balance';

//DOCUMENTATION
//https://reactnative.dev/docs/flatlist

//STYLES
const CONTAINER: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  alignItems: "stretch",
  paddingTop: 0,
}

const FLATLIST: ViewStyle = {
  flexDirection: "column",
  alignSelf: "stretch"
}

//DATA
const DATA = [
  { id: 1, type: "MOVERS", bonusCount: 30, date: "11/25/2019", price: 3000 },
  { id: 2, type: "MASTER", bonusCount: 21, date: "11/25/2019", price: 2500 },
  { id: 3, type: "CLEANING", bonusCount: 60, date: "11/25/2019", price: 5000 },
  { id: 4, type: "MOVERS", bonusCount: 54, date: "11/12/2019", price: 10000 },
  { id: 5, type: "CLEANING", bonusCount: 164, date: "11/12/2019", price: 1500 },
  { id: 6, type: "MOVERS", bonusCount: 5, date: "11/12/2019", price: 4500 },
  { id: 7, type: "MOVERS", bonusCount: 89, date: "11/12/2019", price: 2500 },
  { id: 8, type: "CLEANING", bonusCount: 12, date: "11/09/2019", price: 6500 },
  { id: 9, type: "MASTER", bonusCount: 204, date: "11/09/2019", price: 3000 },
  { id: 10, type: "MASTER", bonusCount: 84, date: "11/07/2019", price: 3000 },
];

const BALANCE = 35990

//COMPONENT
const BonusesScreen = ({navigation}) => {
  return ( 
      <View style={CONTAINER}> 
          <FlatList 
            style={FLATLIST}
            data={DATA}
            ListHeaderComponent={
              <Balance 
                balance={BALANCE}
              />
            }
            keyExtractor={item => "bonus-item-"+item.id}
            renderItem={({ item }) => 
              <BonusItem 
                type={item.type} 
                count={item.bonusCount}
                date={item.date}
              />}
          />
      </View>
  );
}

export default BonusesScreen;