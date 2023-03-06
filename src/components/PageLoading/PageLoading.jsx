import React from "react";
import Loading from "@/assets/images/loading.gif";

export default function PageLoading() {
  return (
    <div className="page-loading-container">
      <div className="page-loading-image">
        <img src={Loading} alt="" />
      </div>
    </div>
  );
}
