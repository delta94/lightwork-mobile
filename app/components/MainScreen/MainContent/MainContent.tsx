import React from 'react';
import { ViewStyle, Text, View } from 'react-native';
import Balance from './Balance/Balance';
import Orders from './Orders/Orders';
import OrdersContainer from './Orders/OrdersContainer';

const RADIUS = 20
const CONTAINER: ViewStyle = {
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    marginTop: -20,
}

const GROUP: ViewStyle = {
    backgroundColor: "#fff",
    padding: 20,
    
}

const TOP_GROUP: ViewStyle = {
    ...GROUP,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    marginBottom: 10,
}

const MainContent = () => {
    return (
        <View style={CONTAINER}>
            <View style={TOP_GROUP}>
                <Balance />
            </View>
            <View style={GROUP}>
                <Orders />
            </View>
        </View>
    )
}

export default MainContent;