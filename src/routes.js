import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/home/:username" component={Home} />
    </BrowserRouter>
  );
}
