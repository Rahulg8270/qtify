import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import { useEffect, useState } from 'react'
import { fetchTopAlbums } from './api/api'
import styles from './App.module.css'
function App() {
  const [topAlbumSongs,setTopAlbumSongs] = useState([])

  const generateTopAlbumSongs = async() => {
    try{
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch(error){
      console.log(error)
    }
    
  }

  useEffect(() => {
    generateTopAlbumSongs();
  },[])

  return (
    <>
    <Navbar />
    <Hero />
    <div className={styles.sectionWrapper}>
    <Section type='album' title='Top Albums' data={topAlbumSongs}/>
    </div>
    </>
  )
}

export default App
