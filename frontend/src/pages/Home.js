import HeroHome from "../components/HeroHome"
import Header from "../components/Header"
import Rules from "../components/Rules"
import GamesCards from "../components/GamesCards"
import Footer from "../components/Footer"
import Reviews from "../components/Reviews"

const Home = () => {
  return (
    <>
      <div className="heroHome">
        <Header />
        <HeroHome />
      </div>
      <Rules />
      <Reviews />
      <GamesCards />
      <Footer />
    </>
  );
};

export default Home;
