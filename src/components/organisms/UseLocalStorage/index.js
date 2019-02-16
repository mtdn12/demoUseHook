import React, { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'

const UseLocalStorage = () => {
  const [name, setName] = useLocalStorage('name', 'Tuan')

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default UseLocalStorage
