import React from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/Cards/Card_Data.js'
import { useRef } from 'react'

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  return (
    <div className='Title-Cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {Cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
