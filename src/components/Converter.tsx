import React, { useEffect, useState } from 'react'
import data from '../assets/data.json'


const Converter = () => {
 const [currency ,setCurrency]=useState<string[]>([])
 const [course,setCourse]=useState<string[]>([])
 const typeData: any=data.rates
 useEffect(()=>{
  const keys: string[] = Object.keys(typeData)
  const values: string[] = Object.values(typeData)

 setCurrency(keys)
 setCourse(values)
 },[])


console.log(currency);
console.log(course);


  return (


    <div className='converter'>
     <select name="" id="">
      {currency.map((el)=>{
        return(
          <option value={el}>{el}</option>
        )
      })}
     </select>
      </div>
  )
}

export default Converter
