import './App.css'
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Nav from './Nav'


function App() {
  return (
    <>
    <BrowserRouter>    
      <Nav />
    </BrowserRouter >
    </>
  )
}

export default App
