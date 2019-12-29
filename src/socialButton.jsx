import React from "react";
import "./socialButton.css";

export function SocialButton({ type }) {
  return <a className={`fa fa-${type}`} />;
}
