import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BackButton({ url }) {
  return (
    <div className="back-button">
      <Link to={`${url}`}>
        <button>BACK TO LIST</button>
      </Link>
    </div>
  );
}

BackButton.propTypes = {
  url: PropTypes.string,
};
