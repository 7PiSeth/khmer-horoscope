import React from 'react'
import mouse from "../assets/images/mouse.png"
import ox from "../assets/images/ox.png"
import tiger from "../assets/images/tiger.png"
import rabit from "../assets/images/rabit.png"
import dragon from "../assets/images/dragon.png"
import snake from "../assets/images/snake.png"
import horse from "../assets/images/horse.png"
import goat from "../assets/images/goat.png"
import monkey from "../assets/images/monkey.png"
import rooster from "../assets/images/rooster.png"
import dog from "../assets/images/dog.png"
import pig from "../assets/images/pig.png"

const zodiacSignImgArr = [
  { id: 1, imgSrc: mouse, name: 'ជូត' },
  { id: 2, imgSrc: ox, name: 'ឆ្លូវ' },
  { id: 3, imgSrc: tiger, name: 'ខាល' },
  { id: 4, imgSrc: rabit, name: 'ថោះ' },
  { id: 5, imgSrc: dragon, name: 'រោង' },
  { id: 6, imgSrc: snake, name: 'ម្សាញ់' },
  { id: 7, imgSrc: horse, name: 'មមី' },
  { id: 8, imgSrc: goat, name: 'មមែ' },
  { id: 9, imgSrc: monkey, name: 'វក' },
  { id: 10, imgSrc: rooster, name: 'រកា' },
  { id: 11, imgSrc: dog, name: 'ច' },
  { id: 12, imgSrc: pig, name: 'កុរ' },
]

const ZodiacSigns = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {zodiacSignImgArr.map(({ id, imgSrc, name }) => (
          <div key={id} className='relative flex flex-col m-1 items-center justify-end p-3 rounded-xl'>
            <img className='object-fill' src={imgSrc} alt={name + '.jpg'} />
            <h1 className='mt-2'>{name}</h1>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default ZodiacSigns