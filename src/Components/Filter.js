import React from 'react'

const Filter = ({onChange, updateFilter}) => {
  return (
    <>
    <div className='filter'>
        <input onChange={onChange}  placeholder={'Search'}></input>
    </div>
    <div className='filter'>
  
  </div>
  </>
  )
}

export default Filter