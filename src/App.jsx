import React from 'react'
import TopBar from "./components/TopBar"
import Footer from './components/Footer'
import Container from './components/Container'

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-lg px-1 mx-auto'>
        <Container />
      </div>
      <Footer />
    </div>
  )
}

export default App