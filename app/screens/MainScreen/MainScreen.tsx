import React from 'react'
import { View, ViewStyle } from 'react-native';
import Backdrop from '../../components/MainScreen/Backdrop';
import { ScrollView } from 'react-native-gesture-handler';
import MainContent from '../../components/MainScreen/MainContent/MainContent';


const CONTAINER: ViewStyle = {

}

const MainScreen = () => {
    return (
    <View >
      <ScrollView>
        <Backdrop />
        <MainContent />
      </ScrollView>
    </View>
    )
  }


export default MainScreen