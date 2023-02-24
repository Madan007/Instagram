import {StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@app/theme/colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}
const VideoPlayer = (props: IVideoPlayer) => {
  const {uri, paused} = props;
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        source={{
          uri,
          type: 'video/mp4',
        }}
        style={styles.video}
        onError={error => console.log('Error Video Player-', error)}
        resizeMode="cover"
        muted={muted}
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
