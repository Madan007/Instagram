import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useForm, Control, Controller} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

import user from '@assets/data/user.json';
import colors from '@app/theme/colors';
import fonts from '@app/theme/fonts';
import {IUser} from '@app/types/models';

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';

type IEditableUser = Pick<IUser, IEditableUserFields>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserFields;
  multiLine?: boolean;
  rules?: object;
}

const URl_REGEX =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i;

const CustomInput = (props: ICustomInput) => {
  const {label = '', multiLine = false, control, name, rules = {}} = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={label}
                style={[
                  styles.input,
                  {borderColor: error ? colors.error : colors.border},
                ]}
                multiline={multiLine}
              />
              {error && (
                <Text style={{color: colors.error}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};
const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | Asset>(
    user.image,
  );

  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user?.website ?? '',
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('Submit edit profile....', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri ?? user.image}}
        style={styles.avatar}
      />
      <Text onPress={() => onChangePhoto()} style={styles.textButton}>
        Change profile photo
      </Text>

      <CustomInput
        label="Name"
        control={control}
        name="name"
        rules={{
          required: 'Name is required',
          minLength: {
            value: 3,
            message: 'Name must be more than 3 characters',
          },
        }}
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{required: 'Username is required'}}
      />
      <CustomInput
        label="Website"
        control={control}
        name="website"
        rules={{
          required: 'Website is required',
          pattern: {value: URl_REGEX, message: 'Invalid url'},
        }}
      />
      <CustomInput
        label="Bio"
        multiLine={true}
        control={control}
        name="bio"
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio cannot be more than 200 characters',
          },
        }}
      />

      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 10,
  },
  label: {
    width: 80,
  },
  input: {
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;
