import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { randomAvatar } from "@/helper/randomAvatar";

export default function ListItem({ name, url, id }) {
  return (
    <>
      <Link to={`${url}${id}`} className="item">
        <div>
          <div>
            <img src={randomAvatar()} alt="Avatar" />
          </div>
          <div>
            <h1 className="title">{name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.any,
  url: PropTypes.string,
};
