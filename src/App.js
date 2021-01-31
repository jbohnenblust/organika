import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Test!!!</h1>

      <button className="btn btn-danger">Test button</button>

      <Footer></Footer>


    </div>
  );
}

export default App;
