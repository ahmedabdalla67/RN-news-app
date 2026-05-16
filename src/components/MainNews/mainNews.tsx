import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { get } from '../../utils/helper/ApiService';
import { ArticleType } from '../../Types/ArticleType';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';
import { MainStackParamList } from '../../Navigation/mainStack';

export default function MainNews() {
    const [topNews, setTopNews]= useState<ArticleType[]>([]);
    const { navigate } = useNavigation<NavigationProp<MainStackParamList, RouteName.HomeScreen>>();

    useEffect(() => {
        getMainNews();
    }, []);

    function goToDetails(item: ArticleType) {
        navigate(RouteName.ArticleDetails, {
            article: item
        });
    }

    function getMainNews() {
        const url = "top-headlines?country=us";
        get(url)
            .then(res => { 
                const articles = res.data?.articles?.filter((article: ArticleType) => article.urlToImage !== null);
                setTopNews(articles);
             })
            .catch(err => { console.log(err) });
    }

    function renderMainNewsCard(item: ArticleType) {
        console.log("rendering main news card, item: ", item);
        return (
            <TouchableOpacity
                onPress={() => goToDetails(item)}
            >
            <ImageBackground
                source={{
                    uri: item.urlToImage
                }}
                style={styles.container}
                resizeMode='cover'
            >
                <View style={styles.internalContainer}>
                    <View style={styles.redContainer}>
                  
                        <Text style={styles.textRedContainer}>{item.source?.name}</Text>
                    </View>
                    <Text style={styles.textInternalContainer}>
                        {item.title}
                    </Text>
                </View>
      
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList
            data={topNews}
            renderItem={({ item }) => renderMainNewsCard(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.listContainer}
        />
    );
}
