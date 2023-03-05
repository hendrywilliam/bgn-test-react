import React from "react";
import PropTypes from "prop-types";

export default function ContentLayout({ children }) {
  return <div className="content-layout">{children}</div>;
}

ContentLayout.propTypes = {
  children: PropTypes.node,
};
