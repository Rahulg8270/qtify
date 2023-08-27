import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import SongImg from './assets/song.png'
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Card image={SongImg} followers={'100M follows'} title={'New Bollywood'}/>
    </>
  )
}

export default App
