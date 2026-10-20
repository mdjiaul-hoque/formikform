import React, { useState } from 'react'

export default function Toggle() {
    const [toggle, setToggle] = useState(true);
  return (
    <div className='text-center bg-gray-400 p-4 ' >
      {toggle && (
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          eius ad natus eaque libero in soluta adipisci, eligendi repudiandae
          recusandae?
        </p>
      )}

          <button className=' bg-amber-400 py-1 px-4 rounded ' onClick={() => {
              setToggle(!toggle);
      }}>{toggle ? "Hide" : "Show"}</button>
    </div>
  );
}
