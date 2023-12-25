import { Header, Main, Footer, Container } from './components'
import Routers from './routes/routes';
import './App.scss';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Routers />
      </Main>
      <Footer />
    </Container>
  )
}

export default App;
