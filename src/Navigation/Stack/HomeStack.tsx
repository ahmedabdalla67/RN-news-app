import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import RouteName from '../../utils/routes/RouteName';
import HomeScreen from '../../screens/homeScreen/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={RouteName.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export type HomeStackParamList = {
    [RouteName.HomeScreen]: undefined;
    // [RouteName.ArticleDetails]: { article: ArticleType };
}