import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const HCard = (prediction, { navigation }) => {
  const numColumns = 2;
  const size = Dimensions.get('window').width / numColumns;

  const img_styles = StyleSheet.create({
    image: {
     width: size,
     height: size,
     margin: 1,
    },
  })

  return (
      <View style={styles.card}>
        <Image
          style={img_styles.image}
          source={{uri : prediction.imageUri}}
        />
        <View style={styles.cardText}>
            <Text style={styles.heading}>Prediction:</Text>
            <Text style={styles.text}>{prediction.predText}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  cardText: {
    flex: 1,
    color: '#000',
     marginLeft: 10
  },
  image: {
    width: 150,
    height: 150,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
});

export { HCard };