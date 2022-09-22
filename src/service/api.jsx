import axios from "axios";

const freeToPlayGamesAPI =
  "https://free-to-play-games-database.p.rapidapi.com/api";

const gamesList = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "995c1fcf9bmsh20b433c8668b7acp1e5df8jsnceb32395cd66",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const newsList = {
  method: "GET",
  url: "https://videogames-news2.p.rapidapi.com/videogames_news/recent",
  headers: {
    "X-RapidAPI-Key": "3f9f6e3914msh2dbc136ebe0cf90p1c66f9jsn71e8a032909b",
    "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
  },
};

// const baseUrl = "https://www.freetogame.com/api";

export const getAllGames = async () => {
  return await axios.request({
    ...gamesList,
    url: `${freeToPlayGamesAPI}/games`,
    params: { "sort-by": "release-date" },
  });
};

export const getSingleGame = async (id) => {
  return await axios.request({
    ...gamesList,
    url: `${freeToPlayGamesAPI}/game`,
    params: { id: id },
  });
};

export const getAllNews = async () => {
  return await axios.request(newsList);
};
