import colors from '@app/theme/colors';
import fonts from '@app/theme/fonts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  count: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
    color: colors.black,
  },
  label: {
    color: colors.grey,
  },
  userInfo: {
    margin: 10,
  },
  name: {
    fontWeight: fonts.weight.semi,
    color: colors.black,
  },
  bio: {
    color: colors.grey,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default styles;
