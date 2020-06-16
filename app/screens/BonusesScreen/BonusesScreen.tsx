import React from 'react'
import { View, ViewStyle } from 'react-native';

import BonusItem from '../../components/BonusesScreen/BonusItem/BonusItem';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Balance from '../../components/BonusesScreen/Balance/Balance';
import { SafeAreaView } from 'react-native-safe-area-context';

const CONTAINER: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  paddingTop: 0,
}

const FLATLIST: ViewStyle = {
  flexDirection: "column",
  alignSelf: "stretch"
}

const data = [
  { id: "1", type: "Заказ Грузчиков", count: "30" },
  { id: "2", type: "Заказ Мастера", count: "21" },
  { id: "3", type: "Заказ Клинера", count: "24" },
  { id: "4", type: "Заказ Грузчиков", count: "54" },
  { id: "5", type: "Заказ Мастера", count: "45" },
  { id: "6", type: "Заказ Клинера", count: "86" },
  { id: "7", type: "Заказ Грузчиков", count: "12" },
  { id: "8", type: "Заказ Клинера", count: "7" },
  { id: "9", type: "Заказ Мастера", count: "558" },
]


const BonusesScreen = () => {
  return ( 
      <View style={CONTAINER}> 
        <ScrollView>
          <Balance />
          <FlatList 
            style={FLATLIST}
            data={data}
            renderItem={({ item }) => <BonusItem type={item.type} count={item.count} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
  );
}

export default BonusesScreen;