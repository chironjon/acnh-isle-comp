import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './App.css';

import InfoModal from './components/info-modal/info-modal.component';
import Header from './components/header/header.component';
import StartPage from './pages/StartPage/startpage.component';
import CatalogPage from './pages/CatalogPage/catalogpage.component';
import LoginPage from './pages/LoginPage/loginpage.component';
import Footer from './components/footer/footer.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
          });
        });
      }
      
      setCurrentUser(userAuth)
    });
  }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        {/*Info Modal for all pop up info*/}
        <InfoModal />
        <Header />
        {/*pages*/}
        <Switch>
          <Route exact path='/acnh-isle-comp' component={StartPage} />
          <Route path='/acnh-isle-comp/catalog' component={CatalogPage} />
          <Route exact path='/acnh-isle-comp/login' render={() => this.props.currentUser ? (<Redirect to='/acnh-isle-comp' />) : (<LoginPage />)} /> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
