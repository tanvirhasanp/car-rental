import React, { createContext, useState } from 'react'

export const BookingFormPopUp = createContext();

export default function Popup({ children }) {

  const [ activePopUp, setActivePopUp ] = useState(false);
  return (
    <BookingFormPopUp.Provider value={{activePopUp, setActivePopUp}}>
      {children}
    </BookingFormPopUp.Provider>
  )
}
