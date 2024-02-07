import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      {/* outlet is main */}
      <Outlet />

      <Footer />
    </Container>
  );
}
