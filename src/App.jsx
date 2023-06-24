import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/home.page";
import SinglePoketypePage from "./pages/single.pokemon.page";
import logo from "./logo.svg";
import "./css/home.page.css";
import "./css/single.page.css";

function App() {
  let [pokemon, setPokemon] = useState([]);
  function fetchPokemon() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((pokemon) => setPokemon(pokemon.pokemon))
      .catch((err) => console.err(err));
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="pokemon/:id"
          element={<SinglePoketypePage pokemon={pokemon} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
