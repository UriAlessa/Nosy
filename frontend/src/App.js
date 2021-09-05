import './App.css';
import Rules from "./components/Rules"
import Footer from './components/Footer'
import Header from './components/Header'
import GamesCards from './components/GamesCards'
/* import Home from './pages/Home' */

const App = () => {

  return (
    <>
      <Header />
     {/*  <Home/> */}
      <Rules />
      <GamesCards />
      <Footer />
    </>
  )
}

export default App
