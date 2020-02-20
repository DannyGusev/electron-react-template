import React from 'react';

import {Header} from './components/Header';
import {Body} from './components/Body';
import Hello from './components/Hello';

export class App extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <Body/>
        <Hello/>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    direction:'rtl'
  }
}