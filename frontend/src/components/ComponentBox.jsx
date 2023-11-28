import React from 'react'

const ComponentBox = ({title, subtitle}) => {
  return (
    <div className='flex flex-col items-center bg-dark-subtle rounded text-black p-2'>
      <h1 className=' font-medium'>{title}</h1>
      <p className=''>{subtitle}</p>
    </div>
  )
}

export default ComponentBox