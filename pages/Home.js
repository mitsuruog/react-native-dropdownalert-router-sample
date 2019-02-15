import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

export const Home = () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button
      title="Press to show the ZAN-NEN Alert"
      onPress={() => this.dropdown.alertWithType('error', 'Error', 'Alert shows inside ;(')}
    />
    <DropdownAlert ref={ref => this.dropdown = ref} />
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
