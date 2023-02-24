import {StyleSheet} from 'react-native';

import colors from '@app/theme/colors';
import fonts from '@app/theme/fonts';

const styles = StyleSheet.create({
  container: {
    // height: 60,
    flexDirection: 'row',
    padding: 7,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    paddingRight: 50,
    paddingHorizontal: 10,
    marginLeft: 5,
    color: colors.grey,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 20,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});

export default styles;
