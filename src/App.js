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
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          );
        });
      } else {
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        {/*header*/}
        <Header currentUser={this.state.currentUser}/>
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
