import React, {useEffect, useState, useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '@app/theme/colors';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModetoIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        (cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted') ??
          false,
      );
    };
    getPermission();
  }, []);

  const flipCamera = () => {
    setCameraType(currentCammeraType =>
      currentCammeraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const capturePicture = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };
    const result = await cameraRef.current?.takePictureAsync(options);
    console.log('result picture $$$$$', result);
  };

  const startRecording = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await cameraRef.current?.recordAsync(options);
      console.log('result recording $$$$$', result);
    } catch (error) {
      console.log(error);
    }
    setIsRecording(false);
  };

  const stopRecording = () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermission === null) {
    return <Text> Loading .... </Text>;
  }

  if (hasPermission === false) {
    return <Text> No access to the camera </Text>;
  }

  console.warn(flash);
  return (
    <View style={styles.page}>
      <View style={[styles.buttonsContainer, {bottom: 40}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={() => flipFlash()}>
          <MaterialIcons
            name={flashModetoIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>

      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.buttonsContainer, {top: 10}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        {true ? (
          <Pressable
            onPress={() => capturePicture()}
            onLongPress={() => startRecording()}
            onPressOut={() => stopRecording()}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? colors.assent : colors.white},
              ]}
            />
          </Pressable>
        ) : null}
        <Pressable onPress={() => flipCamera()}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 2.5 / 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
});
