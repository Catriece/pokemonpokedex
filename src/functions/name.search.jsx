import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NameSearch = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pokeData, setPokeData] = useState([]);

  function getPokemon() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((pokemon) => setPokeData(pokemon.pokemon))
      .catch((err) => console.err(err));
  }

  //USE EFFECTS

  useEffect(() => {
    getPokemon();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Name INPUT", name);
    if (pokeData && pokeData.length > 0) {
      const poke = pokeData.find(
        (info) => info.name.toLowerCase() === name.toLowerCase()
      );
      console.log("POKEMON", poke);

      if (poke) {
        navigate(`pokemon/${poke.id}`);
      }
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form id="name-search" onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="name-input"
        className="search-name"
        placeholder="Name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit" id="go-button" className="search-name">
        GO!
      </button>
    </form>
  );
};

export default NameSearch;
