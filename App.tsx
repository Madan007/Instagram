import React from 'react';
import {StyleSheet, View} from 'react-native';

import HomeScreen from '@screens/Home/HomeScreen';
import CommentsScreen from '@screens/Comments/CommentsScreen';
import ProfileScreen from '@app/screens/Profile/ProfileScreen';
import EditProfileScreen from '@app/screens/EditProfile/EditProfileScreen';
import PostUploadScreen from '@app/screens/PostUpload/PostUploadScreen';

import Navigation from '@app/navigation';

const App = () => {
  return (
    <View style={styles.application}>
      <Navigation />
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
