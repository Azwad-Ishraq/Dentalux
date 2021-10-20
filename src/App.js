
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import initializeAuthentication from './Firebase/Firebase.init';
initializeAuthentication()

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Navbar></Navbar>
      
      


      <Switch>
      <PrivateRoute path='/contact'>
          <Contact></Contact>
         </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/services'>
            <Services></Services>
          </Route>
          <Route  path='/register'>
            <Register></Register>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='/profile'>
            <Profile></Profile>
          </Route>
          <Route  path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <PrivateRoute  path='/service/:serviceId'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>

          <Route  path='*'>
           <NotFound></NotFound>
          </Route>
         


      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
