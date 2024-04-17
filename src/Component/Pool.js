import React, { useContext, useState } from 'react'
import LiquidityReward from '../PoolContent/LiquidityReward'
import MyNavbar from './MyNavbar'
import Context from '../Context/Context'



const Pool = () => {
  const { selectedNetwork, setSelectedNetwork } = useContext(Context)

  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div>
      <MyNavbar selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />

      <LiquidityReward />


    </div>
  )
}

export default Pool
