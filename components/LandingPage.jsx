import React from 'react';
import { HCard } from './HomeCard';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';

const LandingPage = ({ navigation }) => {
  // Replace this with your actual data
  const data = [
    { id: '1', title: 'Item 1', prediction: 'This leaf has Leaf Curl Virus.', imageUri: 'https://agrio.app/wp-content/uploads/2019/11/image1-18-768x1024.jpg'},
    { id: '2', title: 'Item 2', prediction: 'Prediction 2', imageUri: 'https://content.peat-cloud.com/w400/chilli-leaf-curl-virus-pepper-1574948117.jpg'},
    { id: '3', title: 'Item 3', prediction: 'Prediction 3', imageUri: 'https://kisanvedika.bighaat.com/wp-content/uploads/2023/04/MicrosoftTeams-image-14-696x967.jpg'},
    { id: '4', title: 'Item 4', prediction: 'Prediction 4', imageUri: 'https://www.agrifarming.in/wp-content/uploads/2022/11/Leaf-Curl-Virus-in-Chilli-Crop3-1024x683.jpg'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.FList}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HCard title={item.title} predText={item.prediction} imageUri={item.imageUri}/>}
      />
      <View style={styles.addButton}>
        <TouchableOpacity style={styles.camNavButton} onPress={() => navigation.navigate('VirusCamera')}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/icons/PicIcon.png')}
          />
        </TouchableOpacity>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../assets/icons/sepIcon.png')}
        />
        <TouchableOpacity style={styles.camNavButton}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/icons/AddIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCAF',
  },
  FList: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  camNavButton: {
    padding: 5,
    borderRadius: 40,
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    padding: 8,
    flexDirection: 'row',
    backgroundColor: 'green',
    borderRadius: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: "30%",
  },
  separator: {
    color: 'lightgrey',
    fontSize: 20,
  },
});

export { LandingPage };