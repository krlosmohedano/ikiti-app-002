import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/home';
import Contact from './Components/Contact';
import Store from './Components/Store';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
    <Switch>
        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/store">
        <Store />
        </Route>

        <Route exact path="/contact">
        <Contact />
        </Route>

      </Switch>
     </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
