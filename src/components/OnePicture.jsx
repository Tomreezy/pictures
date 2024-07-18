import React from 'react'
const OnePicture = ({name,img,occupation,age}) => {
  return (
    <article className='flex rounded-md gap-4 items-center border border-solid p-4 border-cyan-500 '>
        <div className='size-16 overflow-hidden  '>
            <img src={img} className='w-full border-2 border-dashed border-indigo-400 h-full object-cover  rounded-full' />
        </div>
        <div>
        <p className='font-bold'>{name}</p>
        <p className='text-slate-500'>{occupation}</p>
        <p className='text-slate-500'>{age}</p>
        </div>
    </article>
  )
}

export default OnePicture