import React from 'react'
import {  View, FlatList, StyleSheet } from 'react-native'

import HomeCarousel from './HomeCarousel'

const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<HomeCarousel item={item.home_carousel}/>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    
});