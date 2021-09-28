import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from "./component/context/context";


import ToDo from './component/ToDo/ToDo';
import SettingProvider from './context';

export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
          <SettingProvider>
              <ToDo />
          </SettingProvider>
      </LoginProvider>
    );
  }
}
