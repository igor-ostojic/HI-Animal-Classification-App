//assets
import Chicken from "../assets/chicken.svg";

const Home = () => {
  return (
    <main className="home">
      <div className="home-wrapper">
        <div className="left-side">
          <img src={Chicken} alt="Chicken" className="chicken" />
        </div>
        <div className="right-side">
          <h1>Animal Classifier App</h1>
          <p>Find out the species of any animal in just a few seconds.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
