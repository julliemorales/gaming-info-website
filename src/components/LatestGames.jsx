import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const LatestGames = () => {
  const data = [
    {
      id: 533,
      title: "A.V.A Global",
      thumbnail: "https://www.freetogame.com/g/533/thumbnail.jpg",
      short_description:
        "A.V.A is a free-to-play online first-person shooter with multiple game modes, unique customizations, as well as PvP and PvE gameplay.",
      game_url: "https://www.freetogame.com/open/ava",
      genre: "MMOFPS",
      platform: "PC (Windows)",
      publisher: "NEOWIZ",
      developer: "NEOWIZ",
      release_date: "2022-08-24",
      freetogame_profile_url: "https://www.freetogame.com/ava",
    },
    {
      id: 530,
      title: "Rumbleverse",
      thumbnail: "https://www.freetogame.com/g/530/thumbnail.jpg",
      short_description:
        "Take 40 people, throw them into a city, give them weapons and let them fight it out. That’s the recipe for Iron Galaxy Studios’ new free-to-play Brawler Royale Rumbleverse.",
      game_url: "https://www.freetogame.com/open/rumbleverse",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Epic Games Publishing",
      developer: "Iron Galaxy Studios",
      release_date: "2022-08-11",
      freetogame_profile_url: "https://www.freetogame.com/rumbleverse",
    },
    {
      id: 529,
      title: "Tower of Fantasy",
      thumbnail: "https://www.freetogame.com/g/529/thumbnail.jpg",
      short_description:
        "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!",
      game_url: "https://www.freetogame.com/open/tower-of-fantasy",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Level Infinite",
      developer: "Hotta Studio",
      release_date: "2022-08-10",
      freetogame_profile_url: "https://www.freetogame.com/tower-of-fantasy",
    },
    {
      id: 531,
      title: "Magic Spellslingers",
      thumbnail: "https://www.freetogame.com/g/531/thumbnail.jpg",
      short_description:
        "Magic Spellslingers is the latest entry based on Witzards of the Coast’s popular card game Magic: The Gathering.",
      game_url: "https://www.freetogame.com/open/magic-spellslingers",
      genre: "Card Game",
      platform: "PC (Windows)",
      publisher: "Wizards of the Coast LLC",
      developer: "Pipeworks Studios, Seismic Games",
      release_date: "2022-08-05",
      freetogame_profile_url: "https://www.freetogame.com/magic-spellslingers",
    },
    {
      id: 534,
      title: "Lost Light",
      thumbnail: "https://www.freetogame.com/g/534/thumbnail.jpg",
      short_description:
        "A post-apocalyptic shooter built around creating a realistic experience.",
      game_url: "https://www.freetogame.com/open/lost-light",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "NetEase Games",
      developer: "NetEase Games",
      release_date: "2022-08-04",
      freetogame_profile_url: "https://www.freetogame.com/lost-light",
    },
  ];
  return (
    <div className="container mx-auto py-20 px-10">
      <div>
        <p className="nunito text-xl text-white">Latest Game Releases</p>
        <p className="halant text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          TOP NEW GAMES RELEASED <span className="text-[#DC3D4B]">2022</span>
        </p>
      </div>
      <div>
        <Carousel>
          {data &&
            data.map((item, index) => {
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                  <div className="bg-[#201B1B] rounded-lg">
                    <img
                      className="h-40 w-full object-cover object-center mb-6"
                      src={item.thumbnail}
                      alt="content"
                    ></img>
                    <div className="px-6 py-5">
                      <h3 className="halant text-white text-xl font-semibold">
                        {item.title}
                      </h3>
                      <h2 className="halant text-white my-2">
                        Release Date:
                        <span className="text-[#DC3D4B] ml-1">
                          {item.release_date}
                        </span>
                      </h2>
                      <div className="flex justify-end">
                        <button className="nunito px-4 py-1 bg-[#747474] text-white text-sm rounded-full">
                          {item.genre}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Carousel>
        <div className="text-center mt-12">
          <button className="bg-[#DC3D4B] hover:bg-gray-800 hover:border-white hover:border text-white py-1 px-4 rounded mt-2">
            <Link to="/games">See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestGames;
