import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import {styles} from './styles'

export default function MainNews() {

    function renderMainNewsCard() {
        return (
            <ImageBackground
                source={require("../../assets/images/background1.jpg")}
                style={styles.container}
                resizeMode='cover'
            >
                <View style={styles.internalContainer}>
                    <View style={styles.redContainer}>
                  
                        <Text style={styles.textRedContainer}>Deadline</Text>
                    </View>
                    <Text style={styles.textInternalContainer}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit suscipit voluptas reiciendis praesentium commodi porro dolorem harum eaque maiores cum odio molestiae, provident unde amet laboriosam ducimus totam doloribus.
                    </Text>
                </View>
      
            </ImageBackground>
        );
    }

    return (
        <FlatList
            data={[1, 2, 3]}
            renderItem={renderMainNewsCard}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.listContainer}
        />
    );
}
