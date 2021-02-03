import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/product";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Footer></Footer>


    </div>
  );
}

export default App;
