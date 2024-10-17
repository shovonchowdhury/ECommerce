import { Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/slice/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    dispatch(checkAuth(token));
  }, [dispatch]);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* <h1>Header Component</h1> */}
      <Toaster />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
