import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import About from './Pages/Home/About';
import Skills from './Pages/Home/Skills';
import Projects from './Pages/Home/Projects';
import Services from './Pages/Home/Services';
import Contact from './Pages/Home/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
