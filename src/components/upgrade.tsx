import React from 'react'
import pokeball from '../../assets/pokeball.png'
import Image from 'next/image'

const Upgrade = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center h-full py-10">
          <Image
            src={pokeball}
            height={40}
            width={40}
            alt='pokeball'
            className='animate-spin'
          />
          <span className="ml-2 text-xl text-gray-500">Evolve Pokémon ....</span>
    </div>
  )
}

export default Upgrade