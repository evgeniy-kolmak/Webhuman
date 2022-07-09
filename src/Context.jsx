import React, { useState } from "react";

export const Context = React.createContext();

export const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <Context.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </Context.Provider>
  )
}
