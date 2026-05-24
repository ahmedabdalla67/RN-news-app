import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import RouteName from '../../utils/routes/RouteName';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import ArticleDetails from '../../components/ArticleDetails/ArticleDetails';
import { ArticleType } from '../../Types/ArticleType';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteName.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={RouteName.ArticleDetails} component={ArticleDetails} />
    </Stack.Navigator>
  )
}

export type HomeStackParamList = {
    [RouteName.HomeScreen]: undefined;
    [RouteName.ArticleDetails]: { article: ArticleType };
}