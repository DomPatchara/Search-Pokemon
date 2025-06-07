import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='absolute inset-0 bg-gray-400 flex items-center justify-center'>
        <div className='text-center p-6 bg-white shadow-lg rounded-lg max-w-lg w-full'>
            <h1 className='text-4xl font-bold text-red-600 mb-4'>
                404 - Page Not Found !
            </h1>

            <p className='text-lg text-gray-600'>
                You might want to check the Pokémon name <br />Return to 
                <Link
                    href="/"
                    className='text-blue-500 hover:text-blue-700 font-semibold ml-1'
                >
                    Homepage
                </Link>
            </p>
        </div>   
    </div>
  )
}

export default NotFound