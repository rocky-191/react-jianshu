import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom'

import {GlobalStyled} from "./style";
import {GlobalIconFontStyled} from './statics/iconfont/iconfont'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalIconFontStyled />
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/write" component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
