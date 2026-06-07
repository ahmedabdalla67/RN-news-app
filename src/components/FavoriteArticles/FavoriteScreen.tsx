import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FavoriteStyle from './FavoriteStyle'
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';

export default function FavoriteScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={FavoriteStyle.mainStyle}>
      <Text>Favorite Articles</Text>
      <TouchableOpacity
        onPress={() => navigate(RouteName.SharedStack, {
          screen: RouteName.ArticleDetails,
          params: {}
        })}
      >
        <Text>Go to Article Details</Text>
      </TouchableOpacity>
    </View>
  )
}