import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SearchItems({ name, id, filter }) {
  return (
    <>
      <li className="search-item">
        <Link
          to={{
            pathname: `/${filter}/detail/${id}`,
            state: { from: window.location },
          }}
        >
          <h1>{name}</h1>
        </Link>
      </li>
    </>
  );
}

SearchItems.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  filter: PropTypes.string,
};
