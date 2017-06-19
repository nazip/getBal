import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={Actions.balans} title='Баланс карты'/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={Actions.debitMonth} title='Выборка за тек. месяц'/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={Actions.options} title='Настройки'/>
        </View>
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
