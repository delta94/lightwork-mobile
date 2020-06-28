import React from 'react'
import { View, ViewStyle, Text, Dimensions } from 'react-native';
import Backdrop from '../../components/MainScreen/Backdrop';
import { ScrollView } from 'react-native-gesture-handler';
import MainContent from '../../components/MainScreen/MainContent/MainContent';
import BottomSheet from 'reanimated-bottom-sheet'
import { useHeaderHeight } from '@react-navigation/stack';
import { BottomTabHeight } from '../../constants/constants';

//DOCUMENTATION
//https://github.com/osdnk/react-native-reanimated-bottom-sheet

const CONTAINER: ViewStyle = {
  flex: 1,
}

const _renderContent = () => (
  <MainContent />
)

const _renderHeader = () => (
  <View>
  </View>
)

const MainScreen = () => {
    const windowHeight = Dimensions.get('window').height;
    const headerHeight = useHeaderHeight();
    const viewHeight = windowHeight - headerHeight - BottomTabHeight
    const initialHeight = (viewHeight + 30) * 0.6
    return (  
    <View style={CONTAINER}>
        <BottomSheet
          enabledBottomClamp
          snapPoints = {[initialHeight, viewHeight]}
          renderContent = {_renderContent}
        />
        <Backdrop />
    </View>
    
    )
  }


export default MainScreen