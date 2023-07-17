import React from 'react'
// import mouse from "../assets/images/mouse.png"
// import ox from "../assets/images/ox.png"
// import tiger from "../assets/images/tiger.png"
// import rabit from "../assets/images/rabit.png"
// import dragon from "../assets/images/dragon.png"
// import snake from "../assets/images/snake.png"
// import horse from "../assets/images/horse.png"
// import goat from "../assets/images/goat.png"
// import monkey from "../assets/images/monkey.png"
// import rooster from "../assets/images/rooster.png"
// import dog from "../assets/images/dog.png"
// import pig from "../assets/images/pig.png"

// const zodiacSignImgArr = [
//   { id: 1, imgSrc: mouse, name: 'ជូត' },
//   { id: 2, imgSrc: ox, name: 'ឆ្លូវ' },
//   { id: 3, imgSrc: tiger, name: 'ខាល' },
//   { id: 4, imgSrc: rabit, name: 'ថោះ' },
//   { id: 5, imgSrc: dragon, name: 'រោង' },
//   { id: 6, imgSrc: snake, name: 'ម្សាញ់' },
//   { id: 7, imgSrc: horse, name: 'មមី' },
//   { id: 8, imgSrc: goat, name: 'មមែ' },
//   { id: 9, imgSrc: monkey, name: 'វក' },
//   { id: 10, imgSrc: rooster, name: 'រកា' },
//   { id: 11, imgSrc: dog, name: 'ច' },
//   { id: 12, imgSrc: pig, name: 'កុរ' },
// ]
import {
  GiRat, GiCow, GiTiger,
  GiRabbit, GiSpikedDragonHead,
  GiSnake, GiHorseHead, GiGoat,
  GiMonkey, GiRooster, GiSittingDog, GiPig
} from "react-icons/gi"

const zodiacSignImgArr = [
  { id: 1, zodiac: <GiRat className='text-[53px] sm:text-[93px]' />, name: 'ជូត' },
  { id: 2, zodiac: <GiCow className='text-[55px] sm:text-[95px]' />, name: 'ឆ្លូវ' },
  { id: 3, zodiac: <GiTiger className='text-[50px] sm:text-[90px]' />, name: 'ខាល' },
  { id: 4, zodiac: <GiRabbit className='text-[50px] sm:text-[90px]' />, name: 'ថោះ' },
  { id: 5, zodiac: <GiSpikedDragonHead className='text-[50px] sm:text-[90px]' />, name: 'រោង' },
  { id: 6, zodiac: <GiSnake className='text-[50px] sm:text-[90px]' />, name: 'ម្សាញ់' },
  { id: 7, zodiac: <GiHorseHead className='text-[50px] sm:text-[90px]' />, name: 'មមី' },
  { id: 8, zodiac: <GiGoat className='text-[50px] sm:text-[90px]' />, name: 'មមែ' },
  { id: 9, zodiac: <GiMonkey className='text-[50px] sm:text-[90px]' />, name: 'វក' },
  { id: 10, zodiac: <GiRooster className='text-[53px] sm:text-[93px]' />, name: 'រកា' },
  { id: 11, zodiac: <GiSittingDog className='text-[50px] sm:text-[90px]' />, name: 'ច' },
  { id: 12, zodiac: <GiPig className='text-[53px] sm:text-[93px]' />, name: 'កុរ' },
]

// const ZodiacSigns = () => {
//   return (
//     <div>
//       <div className='flex flex-wrap justify-center'>
//         {zodiacSignImgArr.map(({ id, imgSrc, name }) => (
//           <div key={id} className='relative flex flex-col m-1 items-center justify-end p-3 rounded-2xl
//           duration-300 cursor-pointer active:scale-150'>
//             <img className='object-fill w-[70%] max-sm:w-[30%]' src={imgSrc} alt={name + '.jpg'} />
//             <h1 className='mt-2'>{name}</h1>
//           </div>
//         ))
//         }
//       </div>
//     </div>
//   )
// }
const ZodiacSigns = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {zodiacSignImgArr.map(({ id, zodiac, name }) => (
          <div key={id} className='relative flex flex-col m-1 items-center justify-end p-3 rounded-2xl
          duration-100 cursor-pointer active:scale-150'>
            {zodiac}
            <h1 className='mt-2 text-[12px] sm:text-[18px]'>{name}</h1>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default ZodiacSigns