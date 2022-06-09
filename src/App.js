import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { ToastContainer} from 'react-toastify';
import Footer from './Pages/Shared/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
