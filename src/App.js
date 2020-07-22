import React, { useEffect, useState } from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.componet';
import Header from './components/header/Header.component';
import SigninUp from './pages/sign-in-up-page/SigninUp.component';
import CheckoutPage from './pages/checkout/CheckoutPage.component';
import CurrentUserContext from './contexts/current-user/CurrentUser.context';
import { auth, createUserProfileDocument } from './components/firebase/Firebase.utils';


function App (){
  const [currentUser,setCurrentUser]=useState(null)
  useEffect(()=>{
    let unsubscribeFromAuth =true
    if(unsubscribeFromAuth){
    auth.onAuthStateChanged(async userAuth => {
    (setCurrentUser(userAuth))
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        (setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
       ) })
      }
      setCurrentUser(userAuth)
  })
}
     return ()=>unsubscribeFromAuth=false
    },[])
    return (
      <div>
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
                currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninUp />
              )
            }
          />
        </Switch>
      </div>
    );
  
  }  
  export default App;