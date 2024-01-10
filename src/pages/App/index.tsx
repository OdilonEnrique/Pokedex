import { Outlet } from "react-router-dom"
import { Container } from "./styles"
import { Header } from "../../components/Header"

export function App() {
  return (
      <Container>
        <Header/>

        <main>
          <Outlet />
        </main>

        <footer>footer</footer>
    </Container>
  )
}