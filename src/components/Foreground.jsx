import React, { useRef } from 'react'
import Card  from './Card'
function Foreground() {
  const data=[
    {
      title:"Task2",
      description:"Create a website using Next JS for a conuslting firm. Use prisma for db Connections",
      date:'12/1/24'
    },
    {
      title:"Task2",
      description:"Create a website using Next JS for a conuslting firm. Use prisma for db Connections",
      date:'12/1/24'
    },    {
      title:"Task3",
      description:"Create a website using Next JS for a conuslting firm. Use prisma for db Connections",
      date:'12/1/24'
    }
  ];
  const ref= useRef(null);
  return (
    <>
     <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-7'>
     {data.map((item,index)=>(
      <Card data={item} reference={ref}/>
     ))}
     </div>
     
    </>
  )
}

export default Foreground