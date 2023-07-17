import React from 'react'
import TopBar from "./components/TopBar"
import Footer from './components/Footer'
import Details from './components/Details'
import ZodiacSigns from './components/ZodiacSigns'

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-lg px-1 mx-auto'>
        <ZodiacSigns />
        <Details />
      </div>
      <Footer />
    </div>
  )
}

export default App