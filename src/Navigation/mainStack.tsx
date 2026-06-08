import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigatorScreenParams } from '@react-navigation/native';
import RouteName from '../utils/routes/RouteName';
import AuthStack from './Stack/AuthStack';
import MainTabs from './MainTabs/MainTabs';
import SharedStack, { SharedStackParamList } from './Stack/SharedStack';

const Stack = createStackNavigator<MainStackParamList>();
export default function MainStack() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }
            }
        >
            <Stack.Screen name={RouteName.AuthStack} component={AuthStack} />
            <Stack.Screen name={RouteName.MainTabs} component={MainTabs} />
            <Stack.Screen name={RouteName.SharedStack} component={SharedStack} />
        </Stack.Navigator>
    );
}

export type MainStackParamList = {
    [RouteName.AuthStack]: undefined;
    [RouteName.MainTabs]: undefined;
    [RouteName.SharedStack]: NavigatorScreenParams<SharedStackParamList>;
}