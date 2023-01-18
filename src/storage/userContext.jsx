import { createContext } from "react";

//1. Crear el context
export const userContext = createContext({ user: "anonymous" });

//4. Crear nuestro provider customizado
export function UserContextProvider(props) {
  return (
    /* Renderizmos el context.Provider y los childrens por props */
    <userContext.Provider value={{ user: "Juan" }}>
      {props.children}
    </userContext.Provider>
  );
}
