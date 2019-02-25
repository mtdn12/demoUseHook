import React from 'react'

import useHover from '../../../hooks/useHover'
import styles from './styles.module.scss'

const UseHover = () => {
  const [hoverRef, isHovered] = useHover()
  const [anotherRef, isAnotherHovered] = useHover()
  return (
    <div className={styles.wrapper}>
      <div ref={hoverRef} className={styles.square1}>
        {isHovered ? '😁' : '☹️'}
      </div>
      <div ref={anotherRef} className={styles.square2}>
        {isAnotherHovered ? 'Yes someone touch me' : 'No, no one touch me'}
      </div>
    </div>
  )
}
export default UseHover
