import {StyleSheet} from 'react-native';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  boldText: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    paddingVertical: 3,
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
