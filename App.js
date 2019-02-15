import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import { View, StatusBar } from 'react-native';

import { AppRoute } from './AppRoute';
import { AlertHelper } from './pages/AlertHelper';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRoute />
        <DropdownAlert
          defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
          ref={ref => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </View>
    );
  }
}
