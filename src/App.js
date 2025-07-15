import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./page/About";
import Home from "./page/Home";
import Info from "./page/Info";
import List from "./page/List";
import Login from "./page/login";
import LoginComplete from "./page/loginComplete";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/list" element={<List />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/loginComplete" element={<LoginComplete />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;