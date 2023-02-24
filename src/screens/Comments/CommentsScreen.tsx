import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';

import comments from '@assets/data/comments.json';
import Comment from '@app/components/comment';
import CommentInput from '@app/components/comment-input/';

const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
        style={styles.comment}
      />

      <CommentInput />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  comment: {
    padding: 10,
  },
});
