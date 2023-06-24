import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bugbadge from "../images/bugtype.png";
import darkbadge from "../images/darktype.png";
import dragonbadge from "../images/dragontype.png";
import electricbadge from "../images/electrictype.png";
import fairybadge from "../images/fairytype.png";
import fightingbadge from "../images/fightingtype.png";
import firebadge from "../images/firetype.png";
import flyingbadge from "../images/flyingtype.png";
import ghostbadge from "../images/ghosttype.png";
import grassbadge from "../images/grasstype.png";
import groundbadge from "../images/groundtype.png";
import icebadge from "../images/icetype.png";
import normalbadge from "../images/normaltype.png";
import poisonbadge from "../images/poisontype.png";
import psychicbadge from "../images/psychictype.png";
import rockbadge from "../images/rocktype.png";
import steelbadge from "../images/steeltype.png";
import waterbadge from "../images/watertype.png";
import logo from "../images/pngegg.png";

function HomePage() {
  let [pokemon, setPokemon] = useState([]);
  let [selectedBadges, setSelectedBadges] = useState([]);
  let [showDiv, setShowDiv] = useState(false);
  let [activeButton, setActiveButton] = useState("type-button");
  let [typeArr, setTypeArr] = useState([]);
  let [weaknessArr, setWeaknessArr] = useState([]);
  let [showTypeBadges, setShowTypeBadges] = useState(true);
  let [showWeaknessBadges, setShowWeaknessBadges] = useState(false);
  let [showTypeBadgeClick, setShowTypeBadgeClick] = useState([]);
  let [showWeaknessBadgeClick, setShowWeaknessBadgeClick] = useState([]);

  function getPokemon() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((pokemon) => setPokemon(pokemon.pokemon))
      .catch((err) => console.err(err));
  }

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    console.log(activeButton, "is active");
  }, [activeButton]);

  useEffect(() => {
    console.log("Types: ", typeArr);
  }, [typeArr]);

  useEffect(() => {
    console.log("Weaknesses: ", weaknessArr);
  }, [weaknessArr]);

  useEffect(() => {
    console.log("RESULTS", filteredResults);
  }, [typeArr, weaknessArr]);

  // useEffect(() => {

  // })

  //FILTERING POKEMON BY TYPES OR WEAKNESSES
  const filterPokemon = (type, weakness) => {
    const filteredPokemon = pokemon.filter((pokemon) => {
      const byType =
        type.length === 0 || type.every((type) => pokemon.type.includes(type));
      const byWeakness =
        weakness.length === 0 ||
        weakness.every((weakness) => pokemon.weaknesses.includes(weakness));

      return byType && byWeakness;
    });

    return filteredPokemon;
  };

  const filteredResults = filterPokemon(typeArr, weaknessArr);

  // HANDLING TYPE AND WEAKNESS BUTTONS
  // Turns buttons red if clicked
  // Sets a button as active that helps determine if type or weakness badges are shown on the screen

  const handleNameInput = (e) => {
    const name = e.target.value;

    const filterName = pokemon.filter((pokemon) => {
      return name.toLowerCase() === pokemon.name.toLowerCase();
    });

    console.log("HERES THE FILTER NAME", filterName);
  };

  const handleButtonClick = (e) => {
    const buttonId = e.target.id;
    let redButton = new Array(...e.target.classList);

    if (buttonId === "type-button") {
      setActiveButton(buttonId);
      if (!redButton.includes("bg-red")) {
        e.target.classList.toggle("bg-red");
        document.getElementById("weakness-button").classList.remove("bg-red");
      }
      setShowTypeBadges(true);
      setShowWeaknessBadges(false);
    } else if (buttonId === "weakness-button") {
      setActiveButton(buttonId);
      if (!redButton.includes("bg-red")) {
        e.target.classList.toggle("bg-red");
        document.getElementById("type-button").classList.remove("bg-red");
      }
      setShowTypeBadges(false);
      setShowWeaknessBadges(true);
    }
  };

  //HANDLING BADGE CLICKS
  // Checks to see if type or weakness is active
  // Pushes badge click name (i.e. bug, electric) into either a type or weakness array depending on which button is active and which badge is clicked or removes it from the array
  const handleBadgeClick = (e) => {
    e.preventDefault();
    const badgeName = e.target.alt;

    if (activeButton === "type-button") {
      if (!typeArr.includes(badgeName)) {
        setTypeArr((prevTypeArr) => [...prevTypeArr, badgeName]);
        setShowTypeBadgeClick((prevTypeArr) => [...prevTypeArr, badgeName]);
      } else {
        setTypeArr((prevTypeArr) =>
          prevTypeArr.filter((type) => type !== badgeName)
        );
        setShowTypeBadgeClick((prevTypeArr) =>
          prevTypeArr.filter((type) => type !== badgeName)
        );
      }
    }

    if (activeButton === "weakness-button") {
      if (!weaknessArr.includes(badgeName)) {
        setWeaknessArr((prevWeaknessArr) => [...prevWeaknessArr, badgeName]);
        setShowWeaknessBadgeClick((prevWeaknessArr) => [
          ...prevWeaknessArr,
          badgeName,
        ]);
      } else {
        setWeaknessArr((prevWeaknessArr) =>
          prevWeaknessArr.filter((weakness) => weakness !== badgeName)
        );
        setShowWeaknessBadgeClick((prevWeaknessArr) =>
          prevWeaknessArr.filter((weakness) => weakness !== badgeName)
        );
      }
    }

    setShowDiv(true);
  };

  return (
    <div id="main">
      <div id="info">
        <div id="left-top-div" className="pokemon-info-div">
          <div id="logo">
            <img src={logo} alt="pokemon logo" id="logo-image" />
          </div>
          <div id="search">
            <form id="name-search" onClick={handleNameInput}>
              <input
                type="text"
                id="name-input"
                className="search-name"
                placeholder="Name"
              />
              <button type="submit" id="go-button" className="search-name">
                GO!
              </button>
            </form>
            <br />
            <button
              id="type-button"
              className={`criteria-buttons ${
                activeButton === "type-button" ? "bg-red" : ""
              }`}
              onClick={handleButtonClick}
            >
              Type
            </button>
            <button
              id="weakness-button"
              className={`criteria-buttons ${
                activeButton === "weakness-button" ? "bg-red" : ""
              }`}
              onClick={handleButtonClick}
            >
              Weakness
            </button>
          </div>
          <br />

          {/* SHOWING THE TYPE BADGES WHEN THE TYPE BUTTON IS ACTIVE */}
          {showTypeBadges && (
            <div id="badge-images-div">
              <div className="badge-images">
                <div className={"badge-images"}>
                  <img
                    src={bugbadge}
                    alt="Bug"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Bug") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Bug") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className="badge-images">
                <div className={"badge-images"}>
                  <img
                    src={darkbadge}
                    alt="Dark"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Dark") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Dark") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={dragonbadge}
                    alt="Dragon"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Dragon") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Dragon") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={electricbadge}
                    alt="Electric"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Electric") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Electric") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={fairybadge}
                    alt="Fairy"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Fairy") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Fairy") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={fightingbadge}
                    alt="Fighting"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Fighting") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Fighting") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={firebadge}
                    alt="Fire"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Fire") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Fire") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={flyingbadge}
                    alt="Flying"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Flying") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Flying") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={ghostbadge}
                    alt="Ghost"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Ghost") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Ghost") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={grassbadge}
                    alt="Grass"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Grass") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Grass") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={groundbadge}
                    alt="Ground"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Ground") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Ground") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={icebadge}
                    alt="Ice"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Ice") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Ice") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={normalbadge}
                    alt="Normal"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Normal") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Normal") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={poisonbadge}
                    alt="Poison"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Poison") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Poison") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={psychicbadge}
                    alt="Psychic"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Psychic") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Psychic") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={rockbadge}
                    alt="Rock"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Rock") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Rock") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={steelbadge}
                    alt="Steel"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Steel") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Steel") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={waterbadge}
                    alt="Water"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Water") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Water") ? "white" : ""
                  }`}
                ></div>
              </div>
            </div>
          )}
          {/* SHOWING THE WEAKNESS BADGES WHEN THE WEAKNESS BUTTON IS ACTIVE  */}
          {showWeaknessBadges && (
            <div id="badge-images-div">
              <div className="badge-images">
                <div className={"badge-images"}>
                  <img
                    src={bugbadge}
                    alt="Bug"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Bug") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Bug") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className="badge-images">
                <div className={"badge-images"}>
                  <img
                    src={darkbadge}
                    alt="Dark"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Dark") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Dark") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={dragonbadge}
                    alt="Dragon"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Dragon") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Dragon") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={electricbadge}
                    alt="Electric"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Electric") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Electric") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={fairybadge}
                    alt="Fairy"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Fairy") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Fairy") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={fightingbadge}
                    alt="Fighting"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Fighting") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Fighting") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={firebadge}
                    alt="Fire"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Fire") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Fire") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={flyingbadge}
                    alt="Flying"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Flying") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Flying") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={ghostbadge}
                    alt="Ghost"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Ghost") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Ghost") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={grassbadge}
                    alt="Grass"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Grass") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Grass") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={groundbadge}
                    alt="Ground"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Ground") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Ground") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={icebadge}
                    alt="Ice"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Ice") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Ice") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={normalbadge}
                    alt="Normal"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Normal") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Normal") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={poisonbadge}
                    alt="Poison"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Poison") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Poison") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={psychicbadge}
                    alt="Psychic"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Psychic") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Psychic") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={rockbadge}
                    alt="Rock"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Rock") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Rock") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={steelbadge}
                    alt="Steel"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Steel") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Steel") ? "white" : ""
                  }`}
                ></div>
              </div>
              <div className={"badge-images"}>
                <div className="badge-images">
                  <img
                    src={waterbadge}
                    alt="Water"
                    className="badge"
                    onClick={handleBadgeClick}
                  />
                </div>
                <div
                  id="left-red"
                  className={`click-div ${
                    showTypeBadgeClick.includes("Water") ? "red" : ""
                  }`}
                ></div>
                <div
                  id="right-white"
                  className={`click-div ${
                    showWeaknessBadgeClick.includes("Water") ? "white" : ""
                  }`}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div id="right-bottom-div">
          <div id="pokemon-images-div">
            {filteredResults.map((info) => {
              return (
                <div id="indiv-pokemon-div">
                  <br />
                  <div>
                    <Link
                      to={`pokemon/${info.id}`}
                      id="link"
                      key={info.id + info.name}
                    >
                      <img
                        src={info.img}
                        alt={info.name}
                        id={info.id}
                        className="pokemon-images"
                        key={info.name}
                      />
                      <div>
                        <label id="pokemon-name">{info.name}</label>
                      </div>
                    </Link>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
