import React from 'react';
import {Image, StyleSheet} from 'react-native';

import HomeScreen from '@app/screens/Home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '@app/screens/Profile/ProfileScreen';

import logo from '@assets/images/logo.png';

const Stack = createNativeStackNavigator();

const HeaderTitle = () => {
  return (
    <Image source={logo} resizeMode="contain" style={styles.FeedTitleImage} />
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  FeedTitleImage: {
    width: 150,
    height: 40,
  },
});

export default HomeStackNavigator;
