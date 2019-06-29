import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./common/header/header";
import Home from "./pages/home/home.js";
import Detail from "./pages/detail/detail";
import Login from "./pages/login/login";
import {GlobalStyle} from "./index_style";
import {GlobalIconFont} from "./static/iconfont/iconfont";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>    
      <BrowserRouter>
        <GlobalStyle />
        <GlobalIconFont />
        <Header />
        <Route path="/" exact component={Home} ></Route>
        <Route path="/detail/:id" exact component={Detail} ></Route>
        <Route path="/login" exact component={Login}></Route>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;
