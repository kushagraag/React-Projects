import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { animeData } from "../public/data/animeData";
import { animeData } from "./data.js";

// const animeData = [
//   {
//     title: "Inu x Boku SS",
//     image_url: "https://cdn.myanimelist.net/images/anime/12/35893.jpg",
//     episodes: 12,
//     rating: "PG-13 - Teens 13 or older",
//     score: 7.63,
//     genre: "Comedy, Supernatural, Romance, Shounen",
//   },
//   {
//     title: "Seto no Hanayome",
//     image_url: "https://cdn.myanimelist.net/images/anime/13/58383.jpg",
//     episodes: 26,
//     rating: "PG-13 - Teens 13 or older",
//     score: 7.89,
//     genre: "Comedy, Parody, Romance, School, Shounen",
//   },
//   {
//     title: "Shugo Chara!! Doki",
//     image_url: "https://cdn.myanimelist.net/images/anime/11/10645.jpg",
//     episodes: 51,
//     rating: "PG - Children",
//     score: 7.55,
//     genre: "Comedy, Magic, School, Shoujo",
//   },
//   {
//     title: "Princess Tutu",
//     image_url: "https://cdn.myanimelist.net/images/anime/13/32209.jpg",
//     episodes: 38,
//     rating: "PG-13 - Teens 13 or older",
//     score: 8.21,
//     // genre: "Comedy, Drama, Magic, Romance, Fantasy",
//   },
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <h1>React Anime list</h1>
      </div>
    </header>
  );
}

function Menu() {
  const animes = animeData;
  const animeCount = animes.length;
  return (
    <main className="menu">
      <h2>Animes List</h2>
      {animeCount > 0 ? (
        <>
          <p>Animes on the way!!</p>
          <Animes animes={animes} />
        </>
      ) : (
        <p>We're still updating our database</p>
      )}
    </main>
  );
}

function Animes({ animes }) {
  return (
    <ul className="animes">
      {animes.map((anime) => (
        <Anime animeObj={anime} key={anime.title} />
      ))}
    </ul>
  );
}

function Anime({ animeObj }) {
  const genres = animeObj.genre && animeObj.genre.split(",");
  // const genarr = genres.map((genre) => genre);
  return (
    <li className="anime">
      <img src={animeObj.image_url} alt={animeObj.name} />
      <div>
        <h3>{animeObj.title}</h3>
        {genres && genres.length > 0 ? (
          <p>
            <strong>Genres: </strong>
            {genres.map((genre) => genre)}
          </p>
        ) : (
          ""
        )}
        <p>
          <strong>Score: </strong> {animeObj.score}{" "}
        </p>
        <p>
          <strong>Episodes: </strong>
          {animeObj.episodes}
        </p>
        <p>
          <strong>MAL Rating: </strong>
          {animeObj.rating}
        </p>
      </div>
    </li>
  );
}

function Footer() {
  return <p className="footer">Visit us for more updates.</p>;
}
