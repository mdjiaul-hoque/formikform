import React, { useState } from 'react'

export default function Faqs({ id, title, desc }) {
    const [toggle, setToggle] = useState(false);
  return (
    <article>
      <div className="bg-gray-300 m-5 p-4 rounded border-b-1 border-r-1 border-black ">
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl">{id}</h2>
                  <button onClick={() => {
                      setToggle(!toggle);
                  }} className="bg-amber-400 px-4 rounde font-bold">{toggle ? '-' : '+'}</button>
        </div>
        {toggle && <p>{title}</p>}
      </div>
    </article>
  );
}
