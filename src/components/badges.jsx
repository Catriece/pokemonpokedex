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

function Badges() {
  return (
    <div id="badge-images-div">
      <div className="badge-images">
        <img src={bugbadge} alt="Bug" className="badge" />
      </div>
      <div className="badge-images">
        <img src={darkbadge} alt="Dark" className="badge" />
      </div>
      <div className="badge-images">
        <img src={dragonbadge} alt="Dragon" className="badge" />
      </div>
      <div className="badge-images">
        <img src={electricbadge} alt="Electric" className="badge" />
      </div>
      <div className="badge-images">
        <img src={fairybadge} alt="Fairy" className="badge" />
      </div>
      <div className="badge-images">
        <img src={fightingbadge} alt="Fighting" className="badge" />
      </div>
      <div className="badge-images">
        <img src={firebadge} alt="Fire" className="badge" />
      </div>
      <div className="badge-images">
        <img src={flyingbadge} alt="Flying" className="badge" />
      </div>
      <div className="badge-images">
        <img src={ghostbadge} alt="Ghost" className="badge" />
      </div>
      <div className="badge-images">
        <img src={grassbadge} alt="Grass" className="badge" />
      </div>
      <div className="badge-images">
        <img src={groundbadge} alt="Ground" className="badge" />
      </div>
      <div className="badge-images">
        <img src={icebadge} alt="Ice" className="badge" />
      </div>
      <div className="badge-images">
        <img src={normalbadge} alt="Normal" className="badge" />
      </div>
      <div className="badge-images">
        <img src={poisonbadge} alt="Poison" className="badge" />
      </div>
      <div className="badge-images">
        <img src={psychicbadge} alt="Psychic" className="badge" />
      </div>
      <div className="badge-images">
        <img src={rockbadge} alt="Rock" className="badge" />
      </div>
      <div className="badge-images">
        <img src={steelbadge} alt="Steel" className="badge" />
      </div>
      <div className="badge-images">
        <img src={waterbadge} alt="Water" className="badge" />
      </div>
    </div>
  );
}

export default Badges;
