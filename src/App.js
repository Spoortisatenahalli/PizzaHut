
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Menu from './Components/Menu';
import About from './Components/About';
import CheckoutPage from './Components/CheckoutPage';
import { useState } from 'react';

function App() {
  const[ userData , setUserData] = useState({})


  const handleChange =(e)=>{
  
    const name=e.target.name
  
    const value=e.target.value
   
    setUserData({...userData,[name]:value})
  }
  console.log(userData)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route excat path='/' element={<Home handleChange={handleChange} userData={userData}/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/checkout' element={<CheckoutPage userData={userData}/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>

    </div>
  );
}

export default App;
