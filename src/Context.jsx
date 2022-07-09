import React, { useState } from "react";

export const Context = React.createContext();

export const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <Context.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      createPromocode: () => {
        const firsNumber = new Date().getDay();
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let result = 'W' + firsNumber;
        for (let i = 0; i < 6; i++) {
          const index = Math.round(Math.random() * 50);
          if (index > alphabet.length - 1) {
            result += index;
          } else {
            result += alphabet[index].toUpperCase();
          }
        }
        return result
      }
    }}>
      {props.children}
    </Context.Provider>
  )
}
