import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { randomAvatar } from "@/helper/randomAvatar";

export default function ListItem({ name, id }) {
  return (
    <>
      <Link to={`detail/${id}`} className="item">
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
};
