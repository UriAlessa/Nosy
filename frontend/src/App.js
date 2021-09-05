import './App.css';
import Rules from "./pages/Rules"
import Footer from './components/Footer'
import Header from './components/Header'
import GamesCards from './components/GamesCards'

const App = () => {

  return (
    <>
      <Header />
      {/* <Home /> */}
      <Rules />
      <GamesCards />
      <Footer />
    </>
  )
}

export default App
