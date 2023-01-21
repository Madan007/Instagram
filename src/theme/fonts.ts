import {TextStyle} from 'react-native';

const size = {
  default: 14,
  md: 16,
  sm: 12,
  xs: 10,
  lg: 20,
  xl: 24,
  xxlg: 30,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
