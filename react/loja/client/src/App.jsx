import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import NavBar from './layout/navbar/NavBar';
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="" />
        <Route path="" />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
