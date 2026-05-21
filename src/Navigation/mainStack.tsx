import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ArticleDetails from '../components/ArticleDetails/ArticleDetails';
import RouteName from '../utils/routes/RouteName';
import { ArticleType } from '../Types/ArticleType';
import AuthStack from './Stack/AuthStack';
import MainTabs from './MainTabs/MainTabs';

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
        </Stack.Navigator>
    );
}

export type MainStackParamList = {
    [RouteName.AuthStack]: undefined;
    [RouteName.MainTabs]: undefined;
}