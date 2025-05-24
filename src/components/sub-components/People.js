import React from 'react'
import Luke from '../../images/team/1.png'
import Michael from '../../images/team/2.png'
import Briana from '../../images/team/3.png'
import Lauren from '../../images/team/4.png'
import Martin from '../../images/team/5.png'
import Caitlyn from '../../images/team/6.png'

export default function People() {

  const teamList = [
    {
      name: "Luke Miller",
      title: "Business Owner",
      id: 1,
      image: Luke,
    },
    {
      name: "Michael Diaz",
      title: "Salesman",
      id: 2,
      image: Michael,
    },
    {
      name: "Briana Ross",
      title: "Marketing Specialist",
      id: 3,
      image: Briana,
    },
    {
      name: "Lauren Rivera",
      title: "Detailist",
      id: 4,
      image: Lauren,
    },
    {
      name: "Martin Rizz",
      title: "Mechanic",
      id: 5,
      image: Martin,
    },
    {
      name: "Caitlyn Hunt",
      title: "Manager",
      id: 6,
      image: Caitlyn,
    },
  ]

  return (
    <section className='people-grid-section'>
      <div className='people-grid-section__container'>

        {teamList.map(person => {
          return (
            <div className='people-card' key={person.id}>
              <div className='image-container'>
                <img src={person.image} alt={person.name} />
              </div>

              <div className='person-detail'>
                <h3>{person.name}</h3>
                <span>{person.title}</span>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}
