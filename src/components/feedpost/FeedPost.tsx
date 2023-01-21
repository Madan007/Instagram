import React, {useState} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import DoublePressable from '@components/doublePressable';
import Carousal from '@components/carousal';
import colors from '@app/theme/colors';
import styles from './styles';
import Comment from '@components/comment';
import {IPost} from '@app/types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = (props: IFeedPost) => {
  const {post} = props;
  const [showExpandedDescription, setShowExpandedDescription] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(like => !like);

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  }

  if (post.images) {
    content = <Carousal images={post.images} onDoublePress={toggleLike} />;
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />

        <Text style={styles.userName}> {post.user.username} </Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      {content}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
          <Pressable onPress={() => toggleLike()}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.assent : colors.black}
            />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked By <Text style={styles.boldText}>Ignitius </Text>
          and <Text style={styles.boldText}>{post.noOfLikes} others</Text>
        </Text>

        {/* Post Description */}
        <Text
          style={styles.text}
          numberOfLines={showExpandedDescription ? 0 : 2}>
          <Text style={styles.boldText}> {post.user.username} </Text> {''}
          {post.description}
        </Text>
        <Text
          style={styles.greyText}
          onPress={() => setShowExpandedDescription(sd => !sd)}>
          {showExpandedDescription ? 'less' : 'more'}
        </Text>

        {/* Comments */}
        <Text style={styles.greyText}>
          View all {post.noOfComments} comments
        </Text>
        {post.comments.map((comment: any) => (
          <Comment comment={comment} key={comment.id} />
        ))}

        {/*Posted Date*/}
        <Text style={styles.greyText}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
