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

  useEffect(() => {
    setIndivPokemon(pokeId);
  }, [pokeId]);

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
