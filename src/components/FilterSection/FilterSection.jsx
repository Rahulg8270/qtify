// import React, { useState } from 'react'
import styles from './FilterSection.module.css'
import { Box, CircularProgress } from '@mui/material'
import Card from "../Card/Card";
// import CustomTabPanel from '../BasicTabs/BasicTabs'
import Carousel from "../Carousel/Carousel";
import BasicTabs from '../BasicTabs/BasicTabs';

const FilterSection = ({ 
  title, 
  data, 
  type, 
  filteredDataValues,
  value, 
  handleChange, 
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <BasicTabs value={value} handleChange={handleChange} />
      {data.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) :
        ( 
          <div className={styles.cardsWrapper}>
            <Carousel data={data} renderCardComponent={(data) => <Card data={data} type={type} />} />
          </div>
        )}
    </div>
  )
}

export default FilterSection