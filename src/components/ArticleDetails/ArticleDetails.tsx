import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MainStackParamList } from '../../Navigation/mainStack'
import RouteName from '../../utils/routes/RouteName'

export default function ArticleDetails() {
    const {goBack} = useNavigation();
    const { params } = useRoute<RouteProp<MainStackParamList, RouteName.ArticleDetails>>();
    const { article } = params ?? {};
    const { title, description, urlToImage } = article ?? {};
    
  return (
    <SafeAreaView>
          <Text>{title}</Text>
          <Text onPress={goBack}>Go Back</Text>
      </SafeAreaView>
  )
}