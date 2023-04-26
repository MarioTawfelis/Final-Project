import "./App.css";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import NavBar from "./components/Navbar";


function App() {
  return (
    <div className="wrapper">
      {/* <Auth /> */}
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
