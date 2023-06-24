//NEEDS WORK AS WELL AS CSS UPDATING

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const badges = [
    {
      imageUrl: "/images/bugtype.png",
      id: "Bug",
    },
    {
      imageUrl: "/images/dragontype.png",
      id: "Dragon",
    },
    {
      imageUrl: "/images/electrictype.png",
      id: "Electric",
    },
    {
      imageUrl: "/images/fightingtype.png",
      id: "Fighting",
    },
    {
      imageUrl: "/images/firetype.png",
      id: "Fire",
    },
    {
      imageUrl: "/images/flyingtype.png",
      id: "Flying",
    },
    {
      imageUrl: "/images/ghosttype.png",
      id: "Ghost",
    },
    {
      imageUrl: "/images/grasstype.png",
      id: "Grass",
    },
    {
      imageUrl: "/images/groundtype.png",
      id: "Ground",
    },
    {
      imageUrl: "/images/icetype.png",
      id: "Ice",
    },
    {
      imageUrl: "/images/normaltype.png",
      id: "Normal",
    },
    {
      imageUrl: "/images/poisontype.png",
      id: "Poison",
    },
    {
      imageUrl: "/images/psychictype.png",
      id: "Psychic",
    },
    {
      imageUrl: "/images/rocktype.png",
      id: "Rock",
    },

    {
      imageUrl: "/images/watertype.png",
      id: "Water",
    },
  ];

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
            <div id="buttons-div">
              <button id="prev-evo" className="evo-button">
                ---
              </button>
              <button id="next-evo" className="evo-button">
                +++
              </button>
            </div>
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
                {badges.map((poke) => {
                  if (poke.id === indivPokemon.type.toString()) {
                    return (
                      <img
                        src={poke.imageUrl}
                        alt={poke.id}
                        className="poke-badge"
                      />
                    );
                  }
                })}
              </div>
              <div id="poke-weak-info" className="poke-types-weaks">
                <h3>Weaknesses</h3>
                {indivPokemon.weaknesses.toString()}
                <br />
                {badges.map((poke) => {
                  for (let i = 0; i < pokemonWeaknessArr.length; i++) {
                    const subArr = pokemonWeaknessArr[i];
                    for (let x = 0; x < subArr.length; x++) {
                      if (poke.id === indivPokemon.weaknesses) {
                        return (
                          <img
                            src={poke.imageUrl}
                            alt={poke.id}
                            className="poke-badge"
                          />
                        );
                      }
                    }
                  }
                })}
                ;
              </div>
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
