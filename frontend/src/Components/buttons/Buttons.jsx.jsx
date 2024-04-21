import React from 'react'

function Button() {
    const handleClick = () => {
        // Handle button click logic here
      };
  return (
    <div className="mt-4">
          <button onClick={handleClick} className="bg-customBlue text-white py-2 px-4 rounded-md ">

          </button>
        </div>
  )
}

export default Button