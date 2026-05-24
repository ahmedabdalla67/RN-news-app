import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';
import { MainStackParamList } from '../../Navigation/mainStack';

export default function LoginScreen() {
    const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();
    function clickLogin() {
        navigate(RouteName.MainTabs);
    }
  return (
      <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={clickLogin}>
      <Text>Go to Home Screen</Text>
    </TouchableOpacity>
  )
}