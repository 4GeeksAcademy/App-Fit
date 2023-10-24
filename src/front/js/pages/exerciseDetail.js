import React, { useEffect } from "react";
import gif from "../../img/exercise.gif";
import "../../styles/exercise-detail.css";
import { scrollToTop } from "../function/scrollToTop";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { details } from "../constants/constants";

const ExerciseDetail = () => {
  const { id } = useParams();

  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "89971d01c0msh1690c1d9906070dp1cb205jsnac087ad4de35",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const data = details;
  //const { data, error, loading } = useFetch(url, options);
  console.log(data);
  const title = data.name[0].toUpperCase() + data.name.slice(1);
  return (
    <div className="container-fluid p-0 d-flex flex-column bg-vital-gray">
      <div className="container d-flex flex-column bg-vital-gray p-3 vh-25">
        <h1 className="text-vital-orange title-exercise fw-bold">
          {title}
        </h1>
        <h3 className="body-part text-vital-white">{data.bodyPart}</h3>
      </div>
      <div className="container-fluid p-0 d-flex bg-vital-black">
        <div className="container d-flex flex-row flex-wrap bg-vital-black p-3">
          <div className="col-6">
            <div className="bg-vital-orange rounded-4 m-3 p-3 col-10">
              <span className="text-vital-white fs-6 fw-bold">Target: </span>
              <span className="text-vital-white fs-6">{data.target}</span>
              <br />
              <span className="text-vital-white fs-6 fw-bold">
                Secondary muscles:{" "}
              </span>
              <span className="text-vital-white fs-6">
                {data.secondaryMuscles.map((muscle, index) => {
                  return <span key={index}>{muscle} </span>;
                })}
              </span>
            </div>
            <div className="bg-vital-black  p-3 col-12">
              <div className="d-flex flex-column justify-content-between ">
                <h5 className="text-vital-orange mb-4">
                  What equiment do you need?
                </h5>
                <div className="d-flex flex-row col-9 justify-content-between">
                  
                    
                        <button className="btn btn-vital-gray rounded-pill">
                          {data.equipment}
                        </button>
                                   
                </div>
              </div>
              <div className="d-flex flex-column pt-4 justify-content-between ">
                <h6 className="text-vital-orange mb-2">Description</h6>
                <p className="d-flex flex-row col-12 text-vital-white justify-content-between">
                  Generaremos un texto en ChatGPT a partir de las instrucciones.
                  Quisque placerat metus risus, a suscipit tortor pulvinar id.
                  Etiam sed tellus mauris. Duis quis risus placerat, ornare
                  ligula ut, fermentum augue. Phasellus faucibus eros vel lacus
                  dapibus, nec imperdiet ligula lacinia.
                </p>
              </div>
              <div className="d-flex flex-column pt-4 justify-content-between ">
                <h6 className="text-vital-orange mb-2">Intructions</h6>
                <p className="d-flex flex-row col-12 text-vital-white justify-content-between">
                  <ul>
                    {data &&
                      data.instructions.map((instruction, index) => {
                        return <li key={index}>{instruction}</li>;
                      })}
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="wrap-gif bg-vital-white d-flex justify-content-center align-items-center rounded-5 mx-auto mt-5 h-75">
            <img
              className="img-fluid"
              src={data.gifUrl}
              alt="gif exercise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
