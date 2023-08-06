import { Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
}

export default App;
