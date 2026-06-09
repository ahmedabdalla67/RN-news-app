import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FavoriteStyle from './FavoriteStyle'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';
import { MainStackParamList } from '../../Navigation/mainStack';
import { ArticleType } from '../../Types/ArticleType';

export default function FavoriteScreen() {
  const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();

  function goToDetails(item: ArticleType) {
    navigate(RouteName.SharedStack, {
      screen: RouteName.ArticleDetails,
      params: {
        article: item
      }
    });
  }
  function renderItems(item: ArticleType) {
    return (
      <View style={FavoriteStyle.mainStyle}>
        <Text>Favorite Articles</Text>
        <TouchableOpacity
          onPress={() => goToDetails(item)}
        >
          <Text>Go to Article Details</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={FavoriteStyle.mainStyle}>
      <Text>Favorite Articles</Text>
      <TouchableOpacity
      >
        <Text>Go to Article Details</Text>
      </TouchableOpacity>
    </View>
  );
}