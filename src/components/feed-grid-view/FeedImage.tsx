import React from 'react';
import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import colors from '@app/theme/colors';

interface IFeedImage {
  imageUrl: string;
  showIcon: number;
}

const FeedImage = (props: IFeedImage) => {
  const {imageUrl = '', showIcon = 0} = props;

  return (
    <View style={styles.postsGridView}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      {showIcon ? (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={styles.icon}
        />
      ) : null}
    </View>
  );
};

export default FeedImage;
