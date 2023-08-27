import React from 'react'
import styles from "./Card.module.css"

const Card = ({image,followers,title}) => {
  return (
    <>
        <div className={styles.Card}>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt={title}/>
                <div className={styles.followers}>
                    <h4 className={styles.pills}>{followers}</h4>
                </div>
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    </>
  )
}

export default Card