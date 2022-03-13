import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Body from "./components/Body/Body";
import {Route , Switch ,Redirect} from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer/Footer";
import Extradition from './pages/Extradition';
import Mag from './pages/Mag'

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Body/>
      <Footer/>

    </div>
    
  );
}

export default App;
