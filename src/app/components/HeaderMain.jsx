import React from 'react'
import { BsSearch } from 'react-icons/bs'

const HeaderMain = () => {
  return (
    <div>
        <div>
            <div>Sick</div>
            <div>
                <input type="text" placeholder='Enter any product name...' />
                <BsSearch/>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain