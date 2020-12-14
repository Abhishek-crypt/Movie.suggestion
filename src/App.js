import React, { useState } from "react";
import "./styles.css";

const MovieDatabase = {
  Horror: [
    { name: "The Shining", rating: "8.8/10" },
    { name: "The Blue Elephant", rating: "8/10" },
    { name: "The Exorcist", rating: "7.5/10" }
  ],
  Action: [
    { name: "Tenet", rating: "7.6" },
    { name: "The Dark Knight", rating: "9/10" },
    { name: "Dunkrk", rating: "7.9/10" }
  ],

  Drama: [
    { name: "The Shawshank Redemption", rating: "9/10" },
    { name: "Hababam Sinifi", rating: "8.8/10" },
    { name: "Schinder's List", rating: "8.6/10" },
    { name: "Fight Club", rating: "8/10" }
  ],

  SciFiction: [
    { name: "Inception", rating: "9/10" },
    { name: "Interstellar", rating: "8.7/10" },
    { name: "The Prestige", rating: "8.6/10" }
  ]
};

var movies = Object.keys(MovieDatabase);
export default function App() {
  const [userGenre, setgenre] = useState("Horror");

  function OnClickHandler(item) {
    setgenre(item);
  }

  return (
    <div className="App">
      <h2 className="head">
        <span role="img" aria-label="emoji">
          📺
        </span>{" "}
        <b>Popular Movies</b>
      </h2>
      <hr />
      <div className="bgm1">
        <h4 style={{ color: "brown " }}>
          <b> Checkout Some of the Best Movies,</b>

          <em> Select a genre to get started </em>
        </h4>
        <div>
          {movies.map((item) => (
            <button className="btn" onClick={() => OnClickHandler(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div className="bgm">
        <div className="body">
          <ul style={{ paddingInlineStart: "0" }}>
            {MovieDatabase[userGenre].map((movie) => (
              <li className="li">
                <div className="div1" key={movie.name}>
                  <b> {movie.name}</b>
                </div>
                <div className="div2" key={movie.rating}>
                  <strong> Rating:{movie.rating} </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
