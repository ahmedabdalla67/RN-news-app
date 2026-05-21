import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';
import { MainStackParamList } from '../../Navigation/mainStack';

export default function LoginScreen() {
    const {navigate} = useNavigation();
  return (
      <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { navigate(RouteName.MainTabs); }}>
      <Text>Go to Home Screen</Text>
    </TouchableOpacity>
  )
}