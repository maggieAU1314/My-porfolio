import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Register from "./components/Register";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home name="Maggie" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* 但是它们有一个微妙的区别：第一行代码使用了“path”属性，这意味着它只会匹配到确切的根路径（即“/”），而不会匹配到其他路径。而第二行代码使用了“index”属性，这意味着它将匹配到任何在根路径下的子路径，例如“/about”或“/contact”等。 */}
      </Routes>
    </div>
  );
}

export default App;
