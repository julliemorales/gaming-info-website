import { getSingleGame } from "../service/api";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import NaviBar from "./NaviBar";
import { useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import { Link } from "react-router-dom";
import CarouselSingle from "./CarouselSingle";

const SinglePage = () => {
  const [game, setGame] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getGame = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const result = await getSingleGame(id);
      setGame(result.data);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#291D24]">
      <NaviBar title="Games" />
      <section>
        <div className="container px-5 pb-24 mx-auto flex flex-col">
          <h1 className="halant text-3xl uppercase md:text-4xl lg:text-5xl font-bold text-white my-10">
            {game.title}
          </h1>
          <div className=" mx-auto">
            {/* {console.log(game.screenshots)}
            <CarouselSingle>
              {game.screenshots.map((item, index) => {
                return (
                  <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                    <div className="bg-[#201B1B] rounded-lg">
                      <img
                        className="h-40 w-full object-cover object-center mb-6"
                        src={item.image}
                        alt="content"
                      ></img>
                    </div>
                  </div>
                );
              })}
            </CarouselSingle> */}
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-start text-left justify-center">
                  <h4 className="halant text-white font-medium mt-4 text-lg">
                    Genre: <span className="text-[#DC3D4B]">{game.genre}</span>
                  </h4>
                  <h4 className="halant text-white font-medium mt-4 text-lg">
                    Platform:{" "}
                    <span className="text-[#DC3D4B]">{game.platform}</span>
                  </h4>
                  <h4 className="halant text-white font-medium mt-4 text-lg">
                    Publisher:{" "}
                    <span className="text-[#DC3D4B]">{game.publisher}</span>
                  </h4>
                  <h4 className="halant text-white font-medium mt-4 text-lg">
                    Developer:{" "}
                    <span className="text-[#DC3D4B]">{game.developer}</span>
                  </h4>
                  <h4 className="halant text-white font-medium mt-4 text-lg">
                    Release-Date:{" "}
                    <span className="text-[#DC3D4B]">{game.release_date}</span>
                  </h4>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-2" />
                  <h4 className="halant text-white font-medium my-4 text-lg">
                    Minimum System Requirements:
                  </h4>
                  {/* <p className="halant text-white">
                    OS:{" "}
                    <span className="text-[#DC3D4B]">
                      {game.minimum_system_requirements.os}
                    </span>
                  </p> */}
                  {/* <p className="halant text-white">
                    Processor:{" "}
                    <span className="text-[#DC3D4B]">
                      {game.minimum_system_requirements.processor}
                    </span>
                  </p>
                  <p className="halant text-white">
                    Memory:{" "}
                    <span className="text-[#DC3D4B]">
                      {game.minimum_system_requirements.memory}
                    </span>
                  </p>
                  <p className="halant text-white">
                    Graphics:{" "}
                    <span className="text-[#DC3D4B]">
                      {game.minimum_system_requirements.graphics}
                    </span>
                  </p>
                  <p className="halant text-white">
                    Storage:{" "}
                    <span className="text-[#DC3D4B]">
                      {game.minimum_system_requirements.storage}
                    </span>
                  </p> */}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-white">
                  {game.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer title="Games" />
    </div>
  );
};
export default SinglePage;
