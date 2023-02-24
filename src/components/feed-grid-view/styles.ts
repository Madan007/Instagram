import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -1,
  },
  postsGridView: {
    flex: 1,
    margin: 1,
    aspectRatio: 1,
    maxWidth: '33.33%',
  },
  image: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default styles;
