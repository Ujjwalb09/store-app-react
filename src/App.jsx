import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";

function App() {
  return (
    <div className="h-screen w-screen flex">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </div>
  );
}

export default App;
