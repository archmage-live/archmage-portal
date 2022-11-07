import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.scss'

export const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.circle_1}></div>
      <div className={styles.circle_2}></div>
      <div className={styles.circle_3}></div>
      <div className={styles.circle_4}></div>
      <div className={styles.circle_5}></div>
      <div className={styles.circle_6}></div>
      <div className={clsx(styles.circle_6, styles.circle_6_5)}></div>
      <div className={styles.circle_7}></div>
      <div className={styles.circle_9}></div>
      <div className={styles.circle_8}></div>
      <div className={styles.circle_10}></div>
      <div></div>
    </div>
  )
}
