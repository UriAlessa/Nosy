import HeroHome from "../components/HeroHome";
import Header from "../components/Header";
import Rules from "../components/Rules";
import GamesCards from "../components/GamesCards";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    window.scroll(0, 0)
    props.history.push("/");
    // eslint-disable-next-line
  }, []);
  return (
    <div className="body" style={{ backgroundImage: 'url("/assets/transparentSmall.png")' }}>
      <div className="heroHome">
        <Header />
        <HeroHome />
      </div>
      <Rules />
      <Reviews />
      <GamesCards />
      <Footer />
    </div>
  );
};

export default Home;
