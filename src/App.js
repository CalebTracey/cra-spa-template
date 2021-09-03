import './Styles.css';
import React from 'react';
import Sidebar from './layout/Sidebar';
import Body from './layout/Body';

const App = () => (
  <div className="app">
    <Sidebar />
    <Body />
  </div>
);

export default App;
