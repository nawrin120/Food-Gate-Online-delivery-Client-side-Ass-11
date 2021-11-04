
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './component/Home/Home/Home';
import Footer from './component/Footer/Footer';
import MissMatch from './component/MissMatch/MissMatch';
import AuthProvider from './context/AuthProvider';
import Header from './component/Header/Header';
import Login from './component/Login/Login/Login';
import Items from './component/Home/Items/Items/Items';
import AddItems from './component/Login/AddItems/AddItems';
import PlaceOrder from './component/Login/PlaceOrder/PlaceOrder';
import Orders from './component/Login/Orders/Orders';
import ManageOrders from './component/Login/ManageOrders/ManageOrders';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Photos from './component/Photos/Photos';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/items'>
              <Items></Items>
            </Route>

            <PrivateRoute path='/itemaddition'>
              <AddItems></AddItems>
            </PrivateRoute>

            <PrivateRoute path='/placeorder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path='/order'>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path='/manageallorder'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path='/album'>
              <Photos></Photos>
            </PrivateRoute>
            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute>



            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='*'>
              <MissMatch></MissMatch>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
