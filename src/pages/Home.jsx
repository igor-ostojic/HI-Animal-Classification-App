import { Link } from "react-router-dom";

//styles
import '../styles/Home.css'

//assets
import Monkey from "../assets/animals-slideshow/monkey.svg";

const Home = () => {
  return (
    <main className="home">
      <div className="home-wrapper">
        <div className="left-side">
          <img src={Monkey} alt="Animal" className="monkey" />
        </div>
        <div className="right-side">
          <h1>Animal Classifier App</h1>
          <p>Find out the species of any animal in just a few seconds.</p>
          <Link to="/signup">
            <button className="signup-btn">Try it out</button>
          </Link>
        </div>
      </div>
      <p className="credits">
        Made with <span>❤</span> by{" "}
        <a
          target="_blank"
          href="https://github.com/igor-ostojic"
          className="font-semibold hover:text-indigo-200"
        >
          Igor Ostojic
        </a>
      </p>
    </main>
  );
};

export default Home;
