import React from 'react';
import NavbarHeader from './homepage/NavbarHeader';
import RegBody from './homepage/RegBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header>
      {<NavbarHeader/>}
      </header>
      <RegBody/>
    </div>
  )
}

export default App