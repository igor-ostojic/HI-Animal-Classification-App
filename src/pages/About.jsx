//styles
import "../styles/About.css";

//assets
import TensorFlowSVG from "../assets/about-images/tensorflow.svg";
import ReactSVG from "../assets/about-images/react.svg";
import FirebaseSVG from "../assets/about-images/firebase.svg";

const About = () => {
  return (
    <main className="about">
      <h1>About</h1>
      <div className="about-text-wrapper">
        <p className="about-credits">
          This Web App was made by{" "}
          <a
            target="_blank"
            href="https://github.com/igor-ostojic"
            className="font-semibold hover:text-indigo-200"
          >
            Igor Ostojic
          </a>
        </p>
        <div className="app-uses">
          <p>
            Modern Web App made with <span>React</span>, <span>TensorFlow</span> and{" "}
            <span>Firebase</span> for real time classification of animals. This app uses MobileNets
            for the model data for classifying images. MobileNets are based on a streamlined
            architecture that uses depth-wise separable convolutions to build light weight deep
            neural networks.
          </p>
          <img className="about-image" title="TensorFlow" src={TensorFlowSVG} alt="TensorFlow" />
          <img className="about-image" title="React" src={ReactSVG} alt="React" />
          <img className="about-image" title="Firebase" src={FirebaseSVG} alt="Firebase" />
        </div>
      </div>
    </main>
  );
};

export default About;
