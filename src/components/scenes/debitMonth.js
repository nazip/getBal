import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DebitMonth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>выборка за месяц</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
