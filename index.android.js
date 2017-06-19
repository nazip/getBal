import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import createStore from './src/components/redux/store';
import Main from './src/components/scenes/main';
import Options from './src/components/scenes/options';
import Balans from './src/components/scenes/balans';
import DebitMonth from './src/components/scenes/debitMonth';

const store = createStore();

export default class getBal extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="main" component={Main} title="Главная страница" initial={true} />
            <Scene key="options" component={Options} title="Настройки" />
            <Scene key="balans" component={Balans} title="Баланс карты" />
            <Scene key="debitMonth" component={DebitMonth} title="Выборка за тек. месяц" />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('getBal', () => getBal);
