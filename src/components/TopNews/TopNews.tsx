import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { ArticleType } from '../MainNews/types';
import axios from 'axios';

export default function TopNews() {

    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        getMainNews();
    }, []);

    function getMainNews() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c94b22defbd6451691718265f6dc1d73";
        axios.get(url)
            .then(res => {
                const articles = res.data?.articles?.filter((article: ArticleType) => article.urlToImage !== null);
                setArticles(articles);
            })
            .catch(err => { console.log(err) });
    }

    function renderItems(item: ArticleType) {
        return (
            <View style={styles.cardCont}>
                <Image style={styles.cardArticleImage} source={{ uri: item.urlToImage }} />
                <Text style={styles.cardArticleName}>{item.title}</Text>
            </View>
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