//NEEDS WORK AS WELL AS CSS UPDATING

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Bug from "../images/bugtype.png";
import Dark from "../images/darktype.png";
import Dragon from "../images/dragontype.png";
import Electric from "../images/electrictype.png";
import Fairy from "../images/fairytype.png";
import Fighting from "../images/fightingtype.png";
import Fire from "../images/firetype.png";
import Flying from "../images/flyingtype.png";
import Ghost from "../images/ghosttype.png";
import Grass from "../images/grasstype.png";
import Ground from "../images/groundtype.png";
import Ice from "../images/icetype.png";
import Normal from "../images/normaltype.png";
import Poison from "../images/poisontype.png";
import Psychic from "../images/psychictype.png";
import Rock from "../images/rocktype.png";
import Steel from "../images/steeltype.png";
import Water from "../images/watertype.png";

function SinglePoketypePage({ pokemon }) {
  let [indivPokemon, setIndivPokemon] = useState(null);

  let { id } = useParams();
  let pokeId = pokemon[parseInt(id) - 1];

  let navigate = useNavigate();
  const toPokedex = (e) => {
    navigate("/");
  };

  let pokemonTypeArr = pokemon.map((info) => info.type);
  let pokemonWeaknessArr = pokemon.map((info) => info.weaknesses);

  useEffect(() => {
    setIndivPokemon(pokeId);
  }, [pokeId]);

  //WORK ON FILTERING THROUGH POKEMON EVOLUTIONS!

  //   const filterEvolution = (previous, next) => {
  //     const filteredPokemon = pokemon.filter((pokemon) => {
  //       const byType =
  //         type.length === 0 || type.every((type) => pokemon.type.includes(type));
  //       const byWeakness =
  //         weakness.length === 0 ||
  //         weakness.every((weakness) => pokemon.weaknesses.includes(weakness));

  //       return byType && byWeakness;
  //     });

  //     return filteredPokemon;
  //   };

  //   const filteredResults = filterPokemon(typeArr, weaknessArr);

  return (
    <div id="main-single-pokemon-div">
      {indivPokemon && (
        <div id="home-div">
          <div id="left-top-div" className="info-divs">
            <div id="pokemon-img-div">
              <img
                src={indivPokemon.img}
                alt={indivPokemon.name}
                key={indivPokemon.id}
                id="pokemon-img"
              />
            </div>
            <div id="pokemon-name-div">
              <h3 id="SP-pokemon-name">{indivPokemon.name}</h3>
            </div>
          </div>
          <div id="right-bottom-div" className="info-divs">
            <div id="poke-info-div">
              <div id="poke-types-info" className="poke-types-weaks">
                <h3>Type</h3>
                {indivPokemon.type.join(" & ")}
              </div>
              <div id="poke-weak-info" className="poke-types-weaks">
                <h3>Weaknesses</h3>
                {indivPokemon.weaknesses.join(" & ")}
                <br />
              </div>
              <br />
              <br />
              <div>
                <button id="pokedex-button" onClick={toPokedex}>
                  Back To Pokedex
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePoketypePage;
