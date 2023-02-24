import React from 'react';

import user from '@assets/data/user.json';
import Profile from '@app/components/profile';

const ProfileScreen = () => {
  return <Profile user={user} />;
};

export default ProfileScreen;
