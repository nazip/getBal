import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BalView from '../views/BalView';

export default class Balans extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <BalView id={0}>В реализации</BalView>
      </View>
    )
  }
}
