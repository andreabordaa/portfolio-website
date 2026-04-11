import newDayImg from "../assets/new-day-new-song.jpeg";
import guessTheSongImg from "../assets/guess-the-song.jpeg";
import gameNightImg from "../assets/game-night-api.jpeg";

export const projects = [
  {
    id: 1,
    image: newDayImg,
    title: "New Day, New Song",
    description:
      "A web application that generates a new song recommendation every day. A simple but polished frontend experience built for daily discovery.",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/andreabordaa/new-day-new-song",
    color: "#D7ADFF",
  },
  {
    id: 2,
    image: guessTheSongImg,
    title: "Guess the Song",
    description:
      "An Android app where users play a music guessing game. built natively in Java for Android with a focus on interactive gameplay and user experience.",
    tags: ["Java", "Android", "Mobile"],
    github: "https://github.com/andreabordaa/guess-the-song-app",
    color: "#D7ADFF",
  },
  {
    id: 3,
    image: gameNightImg,
    title: "Game Night API",
    description:
      "A full backend REST API service for planning board game nights. Users can manage games, create and join events, track attendance, and vote on favorites.",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    github: "https://github.com/andreabordaa/game-night-api",
    color: "#D7ADFF",
  },
];
