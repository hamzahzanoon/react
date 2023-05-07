import './App.css';
import Navbars from './Components/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Wallet from './Pages/HomePage/Wallet/Wallet';
import MyBills from './Pages/HomePage/MyBills/MyBills';
import Shops from './Pages/HomePage/Shops/Shops';
import Dashboard from './Home/Dashboard/Dashboard';
import Shipments from './Pages/HomePage/Shipments/Shipments';
import SignOut from './Pages/HomePage/SignOut/SignOut';
import Settings from './Pages/HomePage/Settings/Settings';

function App() {
  return (
    <div className='App'>
    <Navbars />
     <BrowserRouter>
      <Routes>
       <Route path="/" index element={<Home />} />
       <Route path="/Dashboard" index element={<Dashboard />} />
       <Route path="/Shops" index element={<Shops />} />
       <Route path="/Shipments" index element={<Shipments />} />
       <Route path="/Wallet" index element={<Wallet />} />
       <Route path="/MyBills" index element={<MyBills />} />
       <Route path="/Settings" index element={<Settings />} />
       <Route path="/SignOut" index element={<SignOut />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
