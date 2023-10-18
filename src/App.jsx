import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckoutCard from "./components/CheckoutCard";
import Cart from "../src/pages/Cart";
import { CartProvider } from "../src/cartContext";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/checkoutcard" exact component={CheckoutCard} />
          <Route path="/blog" exact component={Blog} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contactform" component={ContactForm} />
          <Route path="/notfound" exact component={NotFound} />
        </Switch>

        <ScrollToTop />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
