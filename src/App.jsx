import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";
import Create from "./components/Create";

function App() {
  return (
    <div className="h-screen w-screen flex">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home/:category" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </div>
  );
}

export default App;
