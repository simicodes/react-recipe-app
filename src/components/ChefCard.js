import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const ChefCard = ({ chef }) => {
  return (
    <div className="chef-card">
      <img src={chef.img} alt="" />
      <div className="chef-card-info">
        <h3 className="chef-card-name">{chef.name}</h3>
        <p className="chef-recipe-count">
          Recipes: <strong>{chef.recipesCount}</strong>
        </p>
        <p className="chef-recipe-cuisine">
          Cuisine: <strong>{chef.cuisine}</strong>
        </p>
        <p className="chef-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
