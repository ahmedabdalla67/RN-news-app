import { View, Text, Image, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { ArticleType } from '../../Types/ArticleType';
import { get } from '../../utils/helper/ApiService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';
import { MainStackParamList } from '../../Navigation/mainStack';

export default function TopNews() {

    const [articles, setArticles] = useState<ArticleType[]>([]);
    const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();

    useEffect(() => {
        getMainNews();
    }, []);

    function getMainNews() {
        const url = "top-headlines?country=us";
        get(url)
            .then(res => {
                const articles = res.data?.articles?.filter((article: ArticleType) => article.urlToImage !== null);
                setArticles(articles);
            })
            .catch(err => { console.log(err) });
    }

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
            <TouchableOpacity onPress={() => goToDetails(item)}>
            <View style={styles.cardCont}>
                <Image style={styles.cardArticleImage} source={{ uri: item.urlToImage }} />
                <Text style={styles.cardArticleName}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Top News</Text>
            <FlatList
                data={articles}
                renderItem={({ item }) => renderItems(item)}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
            />

        </View>

    );
}