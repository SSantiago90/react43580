import { useState } from "react";

export default function useCopy(array) {
  const JSONcart = JSON.stringify(array);
  const copyArray = JSON.parse(JSONcart);
  return copyArray;
}
