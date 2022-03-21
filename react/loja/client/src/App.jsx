import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import NavBar from './layout/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="" />
        <Route path="" />
      </Routes>

    </BrowserRouter>
  )
}

export default App
