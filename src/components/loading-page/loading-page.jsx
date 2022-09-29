import React from "react";
import './loading-page.css';

const Loading = () => {
  return (
    <div className="lds-spinner">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
};

export default Loading;
