import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeCarouselItem = ({ item }) => (
<View style={styles.home_carousel_item}>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.song_singer}>{item.song_singer}</Text>
<Text style={styles.song_description}>{item.song_description}</Text>
</View>
  );

const HomeCarousel = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.home_carousel}
    data={item}
    renderItem={homeCarouselItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default HomeCarousel;

const styles = StyleSheet.create({
    'song_cover': {
        'width': '38vw',
        'height': '38vw',
        'marginTop': 5,
        'marginHorizontal': 10,
        'borderRadius': 15
    },
    'song_singer': {
        'color': '#7c7979',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'song_description': {
        'color': '#7d7878',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});