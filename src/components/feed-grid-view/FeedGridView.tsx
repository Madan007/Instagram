import {FlatList} from 'react-native';
import React, {ComponentType, ReactElement} from 'react';

import styles from './styles';
import {IProfilePost} from '@app/types/models';
import FeedImage from './FeedImage';

interface IFeedGridView {
  data: IProfilePost[];
  ListHeaderComponent?: ComponentType<any> | ReactElement | null | undefined;
}
const FeedGridView = (props: IFeedGridView) => {
  const {data = [], ListHeaderComponent = null} = props;

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        const imageUrl =
          item?.image ?? ((item?.images?.length && item?.images[0]) || '');

        const showIcon = item?.images?.length ?? 0;

        return <FeedImage imageUrl={imageUrl} showIcon={showIcon} />;
      }}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      style={styles.container}
    />
  );
};

export default FeedGridView;
