import React from 'react'
import styles from './Loading.module.scss'
const Loading = () => (
  <div className={styles.loader}>
    <img src={'images/loader.gif'} alt="Loading" className={styles.loaderImg} />
  </div>
)

export default Loading
