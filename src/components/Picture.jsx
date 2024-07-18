import OnePicture from "./OnePicture"
import data from "../data"
import { useState } from "react"


const Picture = () => {
    const[pictures,setPictures]=useState(data)
    
  return (
    <section className="mx-auto space-y-4 border border-solid border-cyan-400 p-4">
        {pictures.map((item,index)=>{
            return <OnePicture {...item} key={index} />
        })}
        
        { pictures.length!==0 ?
        
        <button onClick={()=> setPictures([])} className="w-full mt-4 bg-indigo-400 p-1 border border-cyan-400 border-solid"> clear all </button>
        : 
        <button onClick={()=> setPictures(data)} className="w-full mt-4 bg-indigo-400 p-1 border border-cyan-400 border-solid"> refresh </button> }
    </section>
  )
}

export default Picture