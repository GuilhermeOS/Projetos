import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SideBar from './components/layout/sidebar/SideBar'
import Home from './pages/home/Home';
import NovoContato from './pages/novosContatos/NovoContato';
import Contatos from './pages/contatos/Contatos';

function App() {

  return (
    <BrowserRouter>
      
      <SideBar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contatos" element={ <Contatos /> } />
        <Route path="/novocontato" element={ <NovoContato /> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App
