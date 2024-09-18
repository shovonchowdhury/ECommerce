import { Outlet, Route, Routes } from "react-router-dom";
import Auth from "./layout/Authlayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* <h1>Header Component</h1> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
