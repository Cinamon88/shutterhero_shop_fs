import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
