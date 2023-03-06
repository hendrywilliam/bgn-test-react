import React from "react";
import LoadingProgress from "@/assets/images/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img className="image-loading" src={LoadingProgress} alt="Loading" />
    </div>
  );
}
