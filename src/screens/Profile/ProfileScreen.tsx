import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

import user from '@assets/data/user.json';
import Profile from '@app/components/profile';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const userId = route?.params?.userId;
  //Query the user data with userId

  navigation.setOptions({title: user.username});

  return <Profile user={user} />;
};

export default ProfileScreen;
