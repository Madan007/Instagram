import React from 'react';
import {StyleSheet, View} from 'react-native';

import HomeScreen from '@screens/Home/HomeScreen';
const App = () => {
  return (
    <View style={styles.application}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  application: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;
