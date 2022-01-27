import React from 'react';
import { Outlet } from 'react-router-dom';

import './app.scss';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
