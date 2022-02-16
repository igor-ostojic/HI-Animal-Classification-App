import { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";

//components
import Loader from "../components/Loader";

//styles
import "../styles/MainUserPage.css";
import { model } from "@tensorflow/tfjs";

const MainUserPage = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [resultsArray, setResultsArray] = useState(null);

  const imageRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const identify = async () => {
    const results = await model.classify(imageRef.current);
    console.log(results);
    setResultsArray(results);
  };

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
    return (
      <div className="model-loader">
        <Loader />
      </div>
    );
  }

  const addButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#bc9dff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );

  return (
    <main className="MainUserPage">
      <div className="imageInputContainer">
        <label className="imageInputLabel">
          <span className="addButton">{addButton}</span>
          <input
            type="file"
            required
            accept="image/*"
            className="imageInput"
            onChange={uploadImage}
          />
        </label>
        {imageURL && (
          <div className="image-preview-wrapper">
            <img
              src={imageURL}
              alt="Upload Preview"
              crossOrigin="anonymous"
              ref={imageRef}
              className="image-preview"
            />
            {resultsArray && (
              <div className="results-container">
                {resultsArray[0].className}
              </div>
            )}
          </div>
        )}
      </div>
      {imageURL && (
        <div className="identify-container">
          <button className="identify-button" onClick={identify}>
            Identify
          </button>
          <label className="imageInputLabelTwo">
            <span>Use a different image</span>
            <input
              type="file"
              required
              accept="image/*"
              className="imageInput"
              onChange={uploadImage}
            />
          </label>
        </div>
      )}
    </main>
  );
};

export default MainUserPage;
