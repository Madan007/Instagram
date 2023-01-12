import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xl}}>
        Hello World New
        <MaterialCommunityIcons
          name="account-cowboy-hat"
          size={fonts.size.xl}
        />
      </Text>
    </View>
  );
};

export default App;
