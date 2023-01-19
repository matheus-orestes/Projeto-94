import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 27,
    marginTop: 90,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 178,
    width: 178,
  }
});
