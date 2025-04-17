import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import './App.css';
import { AuthLogin } from "./pages/AuthLogin";
import { AuthRegister } from "./pages/AuthRegister";
import { WishList } from "./pages/WishList";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path="/wishlist" element={<WishList />}/>
      <Route path="/auth/login" element={<AuthLogin/>}/>
      <Route path="/auth/register" element={<AuthRegister/>}/>
    </Routes>
  );
}

export default App;
