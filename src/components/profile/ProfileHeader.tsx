import {Image, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Button from '@app/components/button';
import {IProfile} from '@app/types/models';

const ProfileHeader = (props: IProfile) => {
  const {user} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      {/* HEADER  */}
      <View style={styles.headerRow}>
        {/* Profile Image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following number */}
        <View style={styles.detailsContainer}>
          <Text style={styles.count}> 98 </Text>
          <Text style={styles.label}> Posts </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.count}> 198 </Text>
          <Text style={styles.label}> Followers </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.count}> 298 </Text>
          <Text style={styles.label}> Following </Text>
        </View>
      </View>

      {/* USER INFO*/}
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* BUTTON */}
      <View style={styles.buttonContainer}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('On Another button ....')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
