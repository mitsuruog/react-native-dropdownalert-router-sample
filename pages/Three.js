import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { AlertHelper } from './AlertHelper';

export const Three = () => (
  <View style={styles.container}>
    <Text>Three</Text>
    <Button
      title="Press to show the Info"
      onPress={() => AlertHelper.show('info', 'Info', 'Looks good!!')}
    />
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
