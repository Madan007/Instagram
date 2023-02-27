import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '@app/screens/Profile/ProfileScreen';
import EditProfileScreen from '@app/screens/EditProfile/EditProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
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

export default ProfileStackNavigator;
