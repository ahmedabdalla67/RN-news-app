import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import axios from 'axios'
import { ArticleType } from './types'

export default function MainNews() {
    const [topNews, setTopNews]= useState<ArticleType[]>([]);

    useEffect(() => {
        getMainNews();
    }, []);

    function getMainNews() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c94b22defbd6451691718265f6dc1d73";
        axios.get(url)
            .then(res => { 
                const articles = res.data?.articles?.filter((article: ArticleType) => article.urlToImage !== null);
                setTopNews(articles);
             })
            .catch(err => { console.log(err) });
    }

    function renderMainNewsCard(item: ArticleType) {
        console.log("rendering main news card");
        return (
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
