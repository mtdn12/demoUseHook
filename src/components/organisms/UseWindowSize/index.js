import React from 'react'

import useWindowSize from '../../../hooks/useWindowSize'
import styles from './styles.module.scss'

const UseWindowSize = () => {
  const size = useWindowSize()

  return (
    <div className={styles.wrapper}>
      <p>Width: {size.width} px</p>
      <p>Height: {size.height} px</p>
    </div>
  )
}

export default UseWindowSize
