import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbProgressBolt } from "react-icons/tb";
import {motion} from "framer-motion"
function Card({data,reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.4} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm font-semibold mt-3'> {data.title}</p>
      <p className='text-sm leading-tight mt-2'>{data.description}</p>
      <div className='flex mt-12'>
      <p className='text-xs'>{data.date}</p>
      <div className='ml-[113px]'><IoIosCloseCircleOutline/></div>
      </div>
      <div className='absolute footer bottom-0 bg-green-600 w-full h-10 left-0 py-3 font-semibold'>
        <div className='absolute left-1/2 top-1/2 justify-center -translate-y-[50%] -translate-x-[50%]'>
        <TbProgressBolt size="1.5em"/>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Card