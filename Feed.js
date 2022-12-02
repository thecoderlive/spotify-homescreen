import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import HomeFeed from './HomeFeed'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<Image
    style={styles.trending_event}
    source={{uri: item.trending_event}}
    />
<HomeFeed item={item.home_feed}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    'trending_event': {
        'width': '94vw',
        'height': '70vw',
        'borderRadius': 15,
        'alignSelf': 'center',
        'marginVertical': 15
    }
});