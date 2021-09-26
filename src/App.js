import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './component/ToDo/ToDo';
import SettingProvider from './context';

export default class App extends React.Component {
  render() {
    return (
      <SettingProvider>
        <ToDo />
      </SettingProvider>
    );
  }
}