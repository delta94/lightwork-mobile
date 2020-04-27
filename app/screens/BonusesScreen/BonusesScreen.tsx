import React from 'react'
import { View, ViewStyle } from 'react-native';
import BonusesCount from '../../components/BonusesScreen/BonusesCount/BonusesCount';
import BonusItem from '../../components/BonusesScreen/BonusItem/BonusItem';
import { ScrollView } from 'react-native-gesture-handler';

const CONTAINER: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: 0,
}

let data = [
  { id: 1, type: "Заказ Грузчиков", count: 30 },
  { id: 2, type: "Заказ Мастера", count: 21 },
  { id: 3, type: "Заказ Клинера", count: 24 },
  { id: 4, type: "Заказ Грузчиков", count: 54 },
  { id: 5, type: "Заказ Мастера", count: 45 },
  { id: 6, type: "Заказ Клинера", count: 86 },
  { id: 7, type: "Заказ Грузчиков", count: 12 },
  { id: 8, type: "Заказ Клинера", count: 7 },
  { id: 9, type: "Заказ Мастера", count: 558 },
]


let BonusesItems = data.map(n => <BonusItem key={n.id} type={n.type} count={n.count} />);

let BonusesScreen = () => {

  return (
    <ScrollView>
      <View style={CONTAINER}>
        <BonusesCount />
        {BonusesItems}
      </View>
    </ScrollView>
  );
}

export default BonusesScreen;