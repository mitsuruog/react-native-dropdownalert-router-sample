import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { AlertHelper } from './AlertHelper';

export class Two extends React.Component {

  componentDidMount() {
    AlertHelper.setOnClose(() => { alert('Hi, I am onClose') });
  }

  componentWillUnmount() {
    AlertHelper.setOnClose(() => undefined);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Two(Get onClose callback)</Text>
        <Button
          title="Press to show the Warning"
          onPress={() => AlertHelper.show('warn', 'Warning', 'Close to get the close event.')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
