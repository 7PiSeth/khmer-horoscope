import React, { useState } from 'react'
import {
  GiRat, GiTigerHead,
  GiRabbit, GiSpikedDragonHead,
  GiSnake, GiHorseHead, GiGoat,
  GiMonkey, GiRooster, GiSittingDog, GiPig
} from "react-icons/gi"
import { SiHappycow } from "react-icons/si"
import { FaPiggyBank } from "react-icons/fa"
import Details from './Details'

const zodiacSignImgArr = [
  { id: 1, zodiac: <GiRat className='text-[63px] sm:text-[73px]' />, name: 'ជូត' },
  { id: 2, zodiac: <SiHappycow className='text-[65px] sm:text-[70px]' />, name: 'ឆ្លូវ' },
  { id: 3, zodiac: <GiTigerHead className='text-[60px] sm:text-[70px]' />, name: 'ខាល' },
  { id: 4, zodiac: <GiRabbit className='text-[60px] sm:text-[70px]' />, name: 'ថោះ' },
  { id: 5, zodiac: <GiSpikedDragonHead className='text-[60px] sm:text-[70px]' />, name: 'រោង' },
  { id: 6, zodiac: <GiSnake className='text-[60px] sm:text-[70px]' />, name: 'ម្សាញ់' },
  { id: 7, zodiac: <GiHorseHead className='text-[60px] sm:text-[70px]' />, name: 'មមី' },
  { id: 8, zodiac: <GiGoat className='text-[60px] sm:text-[70px]' />, name: 'មមែ' },
  { id: 9, zodiac: <GiMonkey className='text-[60px] sm:text-[73px]' />, name: 'វក' },
  { id: 10, zodiac: <GiRooster className='text-[63px] sm:text-[73px]' />, name: 'រកា' },
  { id: 11, zodiac: <GiSittingDog className='text-[60px] sm:text-[70px]' />, name: 'ច' },
  { id: 12, zodiac: <FaPiggyBank className='text-[63px] sm:text-[70px]' />, name: 'កុរ' },
]

const Container = () => {
  const [selectedZodiac, setSelectedZodiac] = useState(1);
  return (
    <div className='sm:my-10'>
      <div className='flex flex-wrap justify-center'>
        {zodiacSignImgArr.map(({ id, zodiac, name }) => (
          <div key={id} className={`flex flex-col m-1 items-center justify-end
          duration-200 cursor-pointer active:scale-150
          ${selectedZodiac === id ? 'animate-pulse' : ''}`}
            onClick={() => {
              setSelectedZodiac(id)
            }}>
            {zodiac}
            <h1 className='mt-1 text-[14px] sm:text-[15px]'>{name}</h1>
          </div>
        ))
        }
      </div>
      <Details selectedZodiac={selectedZodiac} />
    </div>
  )
}

export default Container