import React, { useState } from 'react'
import BonusesScreen from './screens/BonusesScreen/BonusesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from './screens/HistoryScreen/HistoryScreen';
import { Image, ImageStyle } from 'react-native';
import { AppLoading } from 'expo';
import HistoryDetailsScreen from "./screens/HistoryScreen/HistoryDetailsScreen/HistoryDetailsScreen";
import { useFonts } from '@use-expo/font';
import HelpScreen from './screens/HelpScreen/HelpScreen';
import { color } from './theme/color';
import IMAGES from './constants/images';
import HistoryScreenContainer from './screens/HistoryScreen/HistoryScreenContainer';
import MainScreen from './screens/MainScreen/MainScreen';

const TAB_ICON: ImageStyle = {
  width: 30,
  height: 30,
}

const HistoryStack = createStackNavigator();

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History"
        component={HistoryScreenContainer}
        options={{
          title: 'История',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }}
      />
      <HistoryStack.Screen name="Details"
        component={HistoryDetailsScreen}
        options={{
          title: 'Детали',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </HistoryStack.Navigator>
  )
}

const BonusesStack = createStackNavigator();

const BonusesStackScreen = () => {
  return (
    <BonusesStack.Navigator>
      <BonusesStack.Screen
        name="Bonuses"
        component={BonusesScreen}
        options={{
          title: 'Бонусы',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </BonusesStack.Navigator>
  )
}

const HelpStack = createStackNavigator();

const HelpStackScreen = () => {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Помощь',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </HelpStack.Navigator>
  )
}

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Главная',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </MainStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

let App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Bonuses') {
              iconName = focused
                ? IMAGES.navigation.bonuses.active
                : IMAGES.navigation.bonuses.normal;
            } else if (route.name === 'History') {
              iconName = focused
                ? IMAGES.navigation.history.active
                : IMAGES.navigation.history.normal;
            }
            else if (route.name === 'Help') {
              iconName = focused
                ? IMAGES.navigation.help.active
                : IMAGES.navigation.help.normal;
            }
            else if (route.name === 'Main') {
              iconName = focused
                ? IMAGES.navigation.main.active
                : IMAGES.navigation.main.normal;
            }
            return <Image
              style={TAB_ICON}
              source={iconName}
            />;
          },
        })}
        tabBarOptions={{
          activeTintColor: color.green,
          inactiveTintColor: "#555",
        }}>
        <Tab.Screen
          name="Bonuses"
          component={BonusesStackScreen}
          options={{
            title: 'Бонусы',
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryStackScreen}
          options={{
            title: 'История',
          }}
        />
        <Tab.Screen
          name="Help"
          component={HelpStackScreen}
          options={{
            title: 'Помощь',
          }}
        />
        <Tab.Screen
          name="Main"
          component={MainStackScreen}
          options={{
            title: 'Главная',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
