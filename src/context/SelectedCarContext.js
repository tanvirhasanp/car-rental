import React, { createContext, useState } from 'react'

export const CarPick = createContext();

export default function SelectedCarContext({children}) {

  const [ carPicked, setCarPicked ] = useState();

  return (
    <CarPick.Provider value={{carPicked, setCarPicked}}>
      {children}
    </CarPick.Provider>
  )
}
