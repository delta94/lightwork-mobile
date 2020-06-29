import React from 'react'
import { View, ViewStyle, Text, Dimensions, Button } from 'react-native';
import Backdrop from '../../components/MainScreen/Backdrop';
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
import { useHeaderHeight } from '@react-navigation/stack';
import { BottomTabHeight } from '../../constants/constants';
import Balance from '../../components/MainScreen/Balance/Balance';
import Orders from '../../components/MainScreen/Orders/Orders';
import { color } from '../../theme';
import Other from '../../components/MainScreen/Other/Other';

//DOCUMENTATION
//https://github.com/osdnk/react-native-reanimated-bottom-sheet

//STYLES
//ViewStyles
const CONTAINER: ViewStyle = {
  flex: 1,
}

const BOTTOM_SHEET: ViewStyle = {
  backgroundColor: color.backGrey
}

const DIVIDER: ViewStyle = {
  marginBottom: 10,
}

const GROUP: ViewStyle = {
  backgroundColor: "#fff",
}




const MainScreen = ({navigation}) => {
  const _renderContent = () => (
    <View style={BOTTOM_SHEET}>
      <View style={GROUP}>
          <Balance navigation={navigation}/>
      </View>
      <View style={DIVIDER}></View>
      <View style={GROUP}>
          <Orders />
      </View>
      <View style={DIVIDER}></View>
      <View style={GROUP}>
          <Other />
      </View>
    </View>
  )
    const windowHeight = Dimensions.get('window').height;
    const headerHeight = useHeaderHeight();
    const viewHeight = windowHeight - headerHeight - BottomTabHeight
    const initialHeight = (viewHeight + 15) * 0.6
    return (  
    <View style={CONTAINER}>
        <BottomSheet
          enabledBottomClamp
          snapPoints = {[initialHeight, viewHeight]}
          renderContent = {_renderContent}
          borderRadius={10}
        />
        <Backdrop />
    </View>
    
    )
  }


export default MainScreen