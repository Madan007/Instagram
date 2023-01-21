import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewToken,
  ViewabilityConfig,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';

import colors from '@app/theme/colors';

interface ICarousal {
  images: string[];
  onDoublePress: () => void;
}
const Carousal = (props: ICarousal) => {
  const {width} = useWindowDimensions();
  let lastTap = 0;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const {images = [], onDoublePress} = props;

  const viewabilityConfig: ViewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      console.log(viewableItems);
      if (viewableItems.length) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  const handleDoublePress = () => {
    const now = Date.now(); // timestamp
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => handleDoublePress()}>
            <Image
              source={{uri: item}}
              style={[styles.carousalImage, {width}]}
            />
          </TouchableWithoutFeedback>
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({
  carousalImage: {
    aspectRatio: 1,
  },
});
