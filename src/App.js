import { Routes, Route } from 'react-router';

import Auth from './layouts/Auth'
import Dashboard from './layouts/Dashboard'
import Store from './layouts/Store';

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register/index';
import EmailPassword from './pages/Auth/Register/EmailPassword';
import FullName from './pages/Auth/Register/FullName';
import DateBirth from './pages/Auth/Register/DateBirth';
import PhoneNumber from './pages/Auth/Register/PhoneNumber';
import Address from './pages/Auth/Register/Address';
import NationalCredentials from './pages/Auth/Register/NationalCredentials';

import Home from './pages/Dashboard/Home';
import Savings from './pages/Dashboard/Savings';
import ProductDetails from './pages/Dashboard/Store/ProductDetails'
import ProductList from './pages/Dashboard/Store/ProductList'
import Account from './pages/Dashboard/Account';
import Score from './pages/Dashboard/Score';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}>
            <Route index element={<EmailPassword />} />
            <Route path="fullname" element={<FullName />} />
            <Route path="datebirth" element={<DateBirth />} />
            <Route path="phonenumber" element={<PhoneNumber />} />
            <Route path="address" element={<Address />} />
            <Route path="nationalcredentials" element={<NationalCredentials />} />
            <Route path="finish" />
          </Route>
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="store" element={<Store />}>
            <Route index element={<ProductList />}/>
            <Route path="product" element={<ProductDetails />}/>
          </Route>
          <Route path="account" element={<Account />} />
          <Route path="savings" element={<Savings />} />
          <Route path="score" element={<Score />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
