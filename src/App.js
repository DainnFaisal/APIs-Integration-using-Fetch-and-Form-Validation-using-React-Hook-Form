import './App.css';
import Headers from './components/Headers';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import Createproduct from './components/Createproduct';
import UpdateProduct from './components/UpdateProduct';
import Categories from './components/Categories';
import User from './components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers/>
          <Routes>
            <Route path='/Register' exact Component={Register}></Route>
            <Route path='/Login' exact Component={Login}></Route>
            <Route path='/Products' exact Component={Products}></Route>
            <Route path='/CreateProduct' exact Component={Createproduct}></Route>
            <Route path='/UpdateProduct' exact Component={UpdateProduct}></Route>
            <Route path='/Categories' exact Component={Categories}></Route>
            <Route path='/User' exact Component={User}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
