import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-secondary spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
