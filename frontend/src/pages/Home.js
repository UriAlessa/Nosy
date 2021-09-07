import HeroHome from "../components/HeroHome";
import Header from "../components/Header";
import Rules from "../components/Rules";
import GamesCards from "../components/GamesCards";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    props.history.push("/");
    // eslint-disable-next-line
  }, []);
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
