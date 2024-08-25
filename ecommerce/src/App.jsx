import './App.css'
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Nav from './Nav'
import Rout from './Rout'
import Footer from './footer';

function App() {
  return (
    <>
    <BrowserRouter>    
      <Nav />
      <Rout />
      <Footer />
    </BrowserRouter >
    </>
  )
}

export default App
