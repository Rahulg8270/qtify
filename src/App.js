import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import FilterSection from './components/FilterSection/FilterSection'
import { useEffect, useState } from 'react'
import { fetchTopAlbums,fetchNewAlbums } from './api/api'
import styles from './App.module.css'
function App() {
  const [topAlbumSongs,setTopAlbumSongs] = useState([])
  const [newAlbumSongs,setNewAlbumSongs] = useState([])
  const [filteredDataValues,setFilteredDataValues] = useState([])
  const [toggle,setToggle] = useState(false)
  const [value,setValue] = React.useState(0)

  const handleChange = (event,newValue) => {
    setValue(newValue)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const generateSongsData = (value) => {
    let key;
    if(value === 0){
      setNewAlbumSongs(newAlbumSongs)
      return;
    }
    else if(value === 1){
      key = 'rock'
    }
    else if(value === 2){
      key = 'pop'
    }
    else if(value === 3){
      key = 'jazz'
    }
    else if(value === 4){
      key = 'blues'
    }
    const res = newAlbumSongs.filter(item => item.genre.key === key)
    console.log(key)
    setFilteredDataValues(res)
    
  }

  useEffect(() => {
    generateSongsData(value)
    // eslint-disable-next-line
  },[value])

  const generateTopAlbumSongs = async() => {
    try{
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch(error){
      console.log(error)
      return null
    }
    
  }
  const generateNewAlbumSongs = async() => {
    try{
      const newAlbumSongs = await fetchNewAlbums()
      setNewAlbumSongs(newAlbumSongs)
    }
    catch(error){
      console.log(error)
      return null
    }
  }
  
  
  const filteredData = (val) => {
    setFilteredDataValues(val)
  }

  

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
  },[])

  return (
    <>
    <Navbar />
    <Hero />
    <div className={styles.sectionWrapper}>
    <Section type='album' title='Top Albums' data={topAlbumSongs}/>
    <Section type='album' title='New Albums' data={newAlbumSongs}/>
    <FilterSection data={newAlbumSongs} type='song' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value}  handleChange={handleChange} handleToggle={handleToggle}/>
    </div>
    </>
  )
}

export default App