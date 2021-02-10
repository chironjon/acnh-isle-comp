import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './App.css';

import StartPage from './pages/StartPage/startpage.component';
import CatalogPage from './pages/CatalogPage/catalogpage.component';
import LoginPage from './pages/LoginPage/loginpage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'test'
    };
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    return (
      <div className='App'>
        {/*header*/}
        <Header />
        {/*pages*/}
        <Switch>
          <Route exact path='/acnh-isle-comp' component={StartPage} />
          <Route path='/acnh-isle-comp/catalogs' component={CatalogPage} />
          <Route path='/acnh-isle-comp/login' component={LoginPage} /> 
        </Switch>
        {/*footer*/}
        <Footer />
      </div>
    );
  }
}

export default App;
