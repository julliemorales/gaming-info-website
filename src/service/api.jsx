import axios from "axios";

const games = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  params: { "sort-by": "release-date" },
  headers: {
    "X-RapidAPI-Key": "995c1fcf9bmsh20b433c8668b7acp1e5df8jsnceb32395cd66",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const baseUrl = "https://www.freetogame.com/api";

export const getAllGames = async () => {
  return await axios.request(games);
};

export const getGame = async (id) => {
  return await axios.get(`${baseUrl}/game?id=${id}`);
};

const options = {
  method: "GET",
  url: "https://videogames-news2.p.rapidapi.com/videogames_news/recent",
  headers: {
    "X-RapidAPI-Key": "3f9f6e3914msh2dbc136ebe0cf90p1c66f9jsn71e8a032909b",
    "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
  },
};

export const getAllNews = async () => {
  return await axios.request(options);
};
