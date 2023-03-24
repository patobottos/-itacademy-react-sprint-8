import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Starship from '../pages/Starship/Starship';
import AllStarships from '../pages/AllStarships/AllStarships';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Error from '../pages/Error/Error';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/starships/" element={<AllStarships />} />
      <Route path="/starships/:id" element={<Starship />}/>
      <Route path="/signup/" element={<Signup />}/>
      <Route path="/login/" element={<Login />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>
)

export default Router;