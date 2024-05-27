import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';



export function VirusCamera({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  

  useEffect(() => {
  requestGalleryPermission();
}, []);

useEffect(() => {
  fetchPhotos();
}, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color: 'white', margin: 5 }}>LCDVirus app would like to use your camera</Text>
        <Button onPress={requestPermission} title="Allow Camera" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function requestGalleryPermission() {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('LCDVirus App needs access to your gallery');
  }
}

  async function takePictureAndSave() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const asset = await MediaLibrary.createAssetAsync(data.uri);
      await MediaLibrary.createAlbumAsync('LCDVirus App', asset, false);
      fetchPhotos();
    }
  }

  async function fetchPhotos() {
  const album = await MediaLibrary.getAlbumAsync('LCDVirus App');
  if (album) {
    const photos = await MediaLibrary.getAssetsAsync({ album: album });
    setPhotos(photos.assets);
  }
}

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('PhotoGallery', { photos: photos })}>
            <Image
            style = {styles.sideicon}
              source={require("../assets/icons/PhotoLibrary.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePictureAndSave}>
            <Image
            style = {styles.camicon}
              source={require("../assets/icons/CamIcon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3} onPress={toggleCameraFacing}>
            <Image
            style = {styles.sideicon}
              source={require("../assets/icons/FlipCam.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity  onPress={() => navigation.navigate('LandingPage', { photos: photos })}>
          <Text style={styles.bottomViewText}>
            Home
          </Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  camera: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: 'transparent',
    justifyContent: "space-between",
    
  },
  button: {
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "transparent",
    bottom: "15%",
  },
  button2: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "transparent",
    alignItems: "center",
    bottom: "20%",
  },
  button3: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "transparent",
    alignItems: "center",
    bottom: "20%",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  camicon: {
    height: 90,
    width: 90
  },
  sideicon: {
    height: 45,
    width: 45
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'rgba(16, 31, 29, 0.8)',
  },
  bottomViewText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  }
});