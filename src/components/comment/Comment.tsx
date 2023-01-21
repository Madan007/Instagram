import {Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import colors from '@app/theme/colors';
import {IComment} from '@app/types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = (props: ICommentProps) => {
  const {comment} = props;
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.boldText}>{comment.user.username}</Text> {''}
        {comment.comment}
      </Text>

      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
  );
};

export default Comment;
