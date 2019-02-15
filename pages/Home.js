import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const Home = () => (
  <View style={styles.container}>
    <Text>react-native-dropdownalert + react-native-router-flux</Text>
    <Button
      title="Page 1"
      onPress={Actions.page_1}
    />
    <Button
      title="Page 2"
      onPress={Actions.page_2}
    />
    <Button
      title="Page 3"
      onPress={Actions.page_3}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});
