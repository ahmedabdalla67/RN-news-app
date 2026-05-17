import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MainStackParamList } from '../../Navigation/mainStack'
import RouteName from '../../utils/routes/RouteName'
import { styles } from './styles'

export default function ArticleDetails() {
    const {goBack} = useNavigation();
    const { params } = useRoute<RouteProp<MainStackParamList, RouteName.ArticleDetails>>();
    const { article } = params ?? {};
    const { title, description, urlToImage } = article ?? {};
    
  return (
      <SafeAreaView>
          <ScrollView>
              <View style={styles.header}>

                  <Text onPress={goBack} style={styles.headerBtn}>
                      Go Back
                  </Text>
              </View>
              <Image source={{ uri: urlToImage }} style={styles.img} />
              <View style={styles.contentContainer}>
                  <Text style={styles.titleStyle}>
                      {title}
                  </Text>
                  <Text>{description}</Text>
              </View>
          </ScrollView>
      </SafeAreaView>
  )
}