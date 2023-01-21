import React from 'react';
import {FlatList} from 'react-native';

import FeedPost from '@components/feedpost/FeedPost';
import posts from '@assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      keyExtractor={item => `post-${item.id}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
