import React from 'react'

function Card({img , title, about, link }) {
  return (
    <>
        

        <div class="w-[300px] rounded-md border">
  <img
    src={img}
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">{title}</h1>
    <p class="mt-3 text-sm text-gray-600">
      {about}
    </p>
  
    <a href= {link} target="_blank"
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read More
    </a>
  </div>
</div>


    </>
  )
}

export default Card