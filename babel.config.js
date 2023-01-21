const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  //if you already have other plugin just paste this lines below
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@app': './src',
        '@components': './src/components/',
        '@screens': './src/screens/',
        '@assets': './src/assets',
      },
    },
  ],
];
module.exports = {presets, plugins};
