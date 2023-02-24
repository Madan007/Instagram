import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import colors from '@app/theme/colors';
import {IComment} from '@app/types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = (props: ICommentProps) => {
  const {comment, includeDetails = false} = props;
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comment}>
      {includeDetails ? (
        <Image source={{uri: comment?.user?.image}} style={styles.avatar} />
      ) : null}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.boldText}>{comment.user.username}</Text> {''}
          {comment.comment}
        </Text>

        {includeDetails ? (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 Likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        ) : null}
      </View>

      <Pressable onPress={() => toggleLike()} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.assent : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
