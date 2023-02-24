import React from 'react';

import FeedGridView from '../feed-grid-view/FeedGridView';
import ProfileHeader from './ProfileHeader';
import {IProfile} from '@app/types/models';

const Profile = (props: IProfile) => {
  const {user} = props;

  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={<ProfileHeader user={user} />}
    />
  );
};

export default Profile;
