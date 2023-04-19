import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
