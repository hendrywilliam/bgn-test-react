import React from "react";
import PropTypes from "prop-types";

export default function SearchItems({ name }) {
  return (
    <>
      <li className="search-item">
        <h1>{name}</h1>
      </li>
    </>
  );
}

SearchItems.propTypes = {
  name: PropTypes.string,
};
