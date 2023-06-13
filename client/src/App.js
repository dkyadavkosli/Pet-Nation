import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import PetsScreen from './screens/Pets/PetsScreen';
import PetInfoScreen from './screens/PetInfo/PetInfoScreen';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import SellPet from './screens/SellPet/SellPet';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AbuseScreen from './screens/Abuse/AbuseScreen';
import Favourites from './screens/Favourites/Favourites';
import { AnimatePresence } from "framer-motion"
import Profile from './screens/Profile/Profile';

function App() {
  return (
    <div className=''>
      <AnimatePresence>
      <BrowserRouter>
      <div>
      <Routes>
          <Route exact path="/home" element={<HomeScreen/>}/>
          <Route exact path="/pets" element={<PetsScreen/>}/> 
          <Route exact path="/petinfo" element={<PetInfoScreen/>}/>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/sell" element={<SellPet/>}/>
          <Route exact path="/abuse" element={<AbuseScreen/>}/>
          <Route exact path="/fav" element={<Favourites/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
