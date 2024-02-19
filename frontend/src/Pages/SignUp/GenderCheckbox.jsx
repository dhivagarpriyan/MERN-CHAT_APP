import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className="form-control" id='radio'>
           <label className="label gap-2 cursor-pointer">
             <span className="label-text font-medium ">MALE</span> 
             <input type="checkbox"  className="checkbox" />
           </label>
        </div>

        <div className="form-control" id='radio'>
           <label className="label gap-2 cursor-pointer">
             <span className="label-text">FEMALE</span> 
             <input type="checkbox"  className="checkbox" />
           </label>
        </div>

    </div>
  )
}

export default GenderCheckbox