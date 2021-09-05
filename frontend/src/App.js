import './App.css';
import Rules from "./pages/Rules"
import Footer from './components/Footer'
import Header from './components/Header'
import GamesCards from './components/GamesCards'
import AccountSection from './components/AccountSection';

const App = () => {

  return (
    <>
      <Header />
      <Rules />
      <GamesCards />
      <Footer />
      <AccountSection />
    </>
  )
}

export default App
