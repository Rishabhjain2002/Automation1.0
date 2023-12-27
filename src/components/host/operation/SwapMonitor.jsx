import React from 'react'
import NavBar from '../../NavBar'
import HeroSec2 from '../../MainSection/HeroSec2'

const SwapMonitor = () => {
  return (
    <>
    <NavBar/>
    <div className="container m-3">
        <h5>CPU & SWAP monitoring</h5>
    </div>
    <HeroSec2/>
    </>
  )
}

export default SwapMonitor