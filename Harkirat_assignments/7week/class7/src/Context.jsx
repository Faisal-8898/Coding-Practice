import { createContext } from "react";

export const CountContext = createContext({
  count: 0, // Initial default value for count
  setCount: () => {},
});
