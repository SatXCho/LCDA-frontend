import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LCD Virus Detection App</Text>
      <Text style={styles.subtitle}>Snoop Dogg</Text>
      <Button title="Go to Camera" onPress={() => navigation.navigate('VirusCamera')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

export { LandingPage };