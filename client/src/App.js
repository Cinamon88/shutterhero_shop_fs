import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Cart from "./components/features/Cart/Cart";
import ProductPage from './components/common/ProductPage/ProductPage'
import OrderForm from "./components/features/OrderForm/OrderForm";
import Summary from "./components/pages/Summary/Summary";
import Logout from './components/pages/Logout/Logout';



const App = () => {

  const Data = () => {
    localStorage.setItem("user", JSON.stringify("Lukasz"));
  };


  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/order' element={<OrderForm />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
