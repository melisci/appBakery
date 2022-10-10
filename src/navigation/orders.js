import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";
import { colors } from "../constants/themes";
import { Orders } from "../screens";


const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Orders"
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? colors.primary : colors.secondary,
            },
            headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'OpenSans-Bold',
                },
            
            }}       
        >
            <Stack.Screen 
                name="Orders"
                component={Orders}
            />

        </Stack.Navigator>
    )
}

export default OrdersNavigator