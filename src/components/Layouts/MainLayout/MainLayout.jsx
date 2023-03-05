import React from "react";
import PropTypes from "prop-types";

export default function MainLayout({ children }) {
  return <div className="main-layout">{children}</div>;
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
