import React from 'react'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p>Banner Components</p>
        <p>Carousel: use tailwinds</p>
      </div>
    </div>
  )
}

export default Banner