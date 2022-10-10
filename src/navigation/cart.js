import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";
import { colors } from "../constants/themes";
import { Cart } from "../screens";


const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Cart"
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
                name="Cart"
                component={Cart}
            />

        </Stack.Navigator>
    )
}

export default CartNavigator