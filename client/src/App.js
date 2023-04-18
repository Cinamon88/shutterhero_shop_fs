import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
