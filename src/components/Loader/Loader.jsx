import React from "react";
import "./loader.css";
import { RaceBy } from "@uiball/loaders";
/* function Loader() {
  return <span className="loader"></span>;
} */

function Loader(props) {
  return (
    <RaceBy size={220} lineWeight={5} speed={0.8} color="orange" {...props} />
  );
}
export default Loader;
