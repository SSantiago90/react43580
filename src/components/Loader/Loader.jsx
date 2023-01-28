import React from "react";
import "./loader.css";
import { LeapFrog } from "@uiball/loaders";

function Loader(props) {
  return <LeapFrog size={140} speed={2} color="purple" {...props} />;
}

export default Loader;
