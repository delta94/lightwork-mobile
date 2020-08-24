import React from 'react'
import { View, ViewStyle } from 'react-native'
import Balance from '../../components/BonusesScreen/Balance/Balance'
import { DATE_FILTER } from '../../constants/filters'
import DateGroup from '../../components/BonusesScreen/DateGroup/DateGroup'
import { ScrollView } from 'react-native-gesture-handler'

// DOCUMENTATION
// https://reactnative.dev/docs/flatlist

// STYLES
const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  flex: 1,
  alignItems: 'stretch',
  paddingTop: 0
}

const BALANCE = 35990

// COMPONENT
const BonusesScreen = (props: any) => {
  const DateGroups = DATE_FILTER(props.data).map((n: any) => (
    <DateGroup date={n.date} key={n.id} data={props.data} />
  ))
  return (
    <View style={CONTAINER}>
      <ScrollView>
        <Balance balance={BALANCE} />
        {DateGroups}
      </ScrollView>
    </View>
  )
}

export default BonusesScreen
