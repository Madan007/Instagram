import {Image, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';

const CommentInput = () => {
  const [comment, setComment] = useState('');

  const handlePost = () => {
    console.warn('Posting comment .....', comment);
    //Sending data to backend
    setComment('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />

      <TextInput
        value={comment}
        onChangeText={setComment}
        placeholder="Write your comment..."
        style={styles.input}
        multiline
      />

      <Text style={styles.button} onPress={() => handlePost()}>
        POST
      </Text>
    </View>
  );
};

export default CommentInput;
