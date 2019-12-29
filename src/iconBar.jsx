import React from "react";
import "./iconBar.css";

export function IconBar({ orientation }) {
  return (
    <div className={`icon-bar_${orientation}`}>
      <a className="active" href="#">
        <i className="fa fa-home"></i>
      </a>
      <a href="#">
        <i className="fa fa-search"></i>
      </a>
      <a href="#">
        <i className="fa fa-envelope"></i>
      </a>
      <a href="#">
        <i className="fa fa-globe"></i>
      </a>
      <a href="#">
        <i className="fa fa-trash"></i>
      </a>
    </div>
  );
}
