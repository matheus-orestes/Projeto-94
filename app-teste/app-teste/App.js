import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}> Biblioteca alimentar </Text> <Text style={styles.paragraph}> Realize Login para continuar </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#778899',
    padding: 8,
  },
  title: {
    margin: 25,
    marginBottom: 400,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'top',
  },
  paragraph: {
    margin: 20,
    marginTop: -400,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
