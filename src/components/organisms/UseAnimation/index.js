import React, { Component } from 'react'
import useAnimation from '../../../hooks/useAnimation'
import Ball from '../../molecules/Ball'

const UseAnimation = () => {
  const animation1 = useAnimation('elastic', 600, 0)
  const animation2 = useAnimation('linear', 600, 150)
  const animation3 = useAnimation('elastic', 600, 300)
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Ball
        innerStyle={{
          marginTop: animation1 * 200 - 100,
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation2 * 200 - 100,
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation3 * 200 - 100,
        }}
      />
    </div>
  )
}

export default UseAnimation
