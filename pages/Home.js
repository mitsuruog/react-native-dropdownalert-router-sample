import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Home = () => (
  <View stype={styles.container}>
    <Text>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
