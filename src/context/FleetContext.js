import React, { createContext, useState } from 'react'
import AudiImg from '../images/cars-big/audia1.jpg'
import VwGolfImg from '../images/cars-big/golf6.jpg'
import ToyotaImg from '../images/cars-big/toyotacamry.jpg'
import BmwImg from '../images/cars-big/bmw320.jpg'
import MercImg from '../images/cars-big/benz.jpg'
import VwPassatImg from '../images/cars-big/passatcc.jpg'
import AudiImg2 from '../images/cars-big/audia1-2.png'
import VwGolfImg2 from '../images/cars-big/golf6-2.png'
import ToyotaImg2 from '../images/cars-big/toyotacamry-2.png'
import BmwImg2 from '../images/cars-big/bmw320-2.png'
import MercImg2 from '../images/cars-big/benz-2.png'
import VwPassatImg2 from '../images/cars-big/passatcc-2.png'


export const FleetArray = createContext();

export default function FleetContext({children}) {

  const [cars, setCars] = useState([
    {
      name: "Audi A1 S-Line",
      model: "A1 S-Line",
      mark: "Audi",
      year: 2015,
      doors: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Petrol",
      price: 4500,
      id: 1,
      image: AudiImg,
      image2: AudiImg2
    },
    {
      name: "VW Golf 6",
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      price: 3700,
      id: 2,
      image: VwGolfImg,
      image2: VwGolfImg2
    },
    {
      name: "Toyota Camry",
      model: "Camry",
      mark: "Toyota",
      year: 2013,
      doors: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Hybrid",
      price: 3500,
      id: 3,
      image: ToyotaImg,
      image2: ToyotaImg2
    },
    {
      name: "BMW 3 Series",
      model: "BMW 320",
      mark: "BMW",
      year: 2013,
      doors: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      price: 4000,
      id: 4,
      image: BmwImg,
      image2: BmwImg2
    },
    {
      name: "Mercedes-Benz GLK",
      model: "GLK",
      mark: "Mercedes",
      year: 2009,
      doors: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 5000,
      id: 5,
      image: MercImg,
      image2: MercImg2
    },
    {
      name: "VW Passat CC",
      model: "Passat",
      mark: "Volkswagen",
      year: 2010,
      doors: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 3500,
      id: 6,
      image: VwPassatImg,
      image2: VwPassatImg2
    },
  ])

  const [ rentalLocations, setRentalLocations ] = useState(
    [
      {
        location: 'Patuakhali',
        id: 1
      },
      {
        location: 'Dumki',
        id: 2
      },
      {
        location: 'Barishal',
        id: 3
      },
      {
        location: 'Dhaka',
        id: 4
      },
      {
        location: 'Barguna',
        id: 5
      },
      {
        location: 'Boga',
        id: 6
      },

    ]
  )

  return (
    <FleetArray.Provider value={{cars, setCars, rentalLocations, setRentalLocations}}>
      {children}
    </FleetArray.Provider>
  )
}
