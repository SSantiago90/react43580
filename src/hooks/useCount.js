import { useState } from "react";

const useCount = (max) => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < max) setCount(count + 1);
  }

  function handleSubstract() {
    // validar -1 -2
    setCount(count - 1);
  }

  return {
    count,
    handleAdd,
    handleSubstract,
  };
};

export default useCount;
