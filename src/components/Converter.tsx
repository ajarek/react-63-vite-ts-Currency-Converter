import React, { useEffect, useState } from 'react'
import data from '../assets/data.json'

const Converter = () => {
  const [currency, setCurrency] = useState<[string, string][]>([])
  const [result, setResult] = useState<string>('3.67')
  const [result2, setResult2] = useState<string>('3.67')
  const [inputValue, setInputValue] = useState<string>('1.00')
  const [inputValue2, setInputValue2] = useState<string>('1.00')
  const typeData: any = data.rates

  useEffect(() => {
    const entries: [string, string][] = Object.entries(typeData)
    setCurrency(entries)
  }, [])

  const handleResult = (e: { target: { value: any } }) => {
    setResult(e.target.value) 
     setInputValue(( Number(inputValue2) * Number(e.target.value) /Number(result2)).toFixed(2))
    
  }
  const handleResult2 = (e: { target: { value: any } }) => {
    setResult2(e.target.value) 
   
    setInputValue2(( Number(inputValue) * Number(e.target.value) /Number(result)).toFixed(2))
   
  }
 
 
 
  return (
    <div className='converter'>
      <div className='wrapper-converter'>
        <input
          type='number'
          step={'0.01'}
          value={inputValue}
          onChange={(e) => {setInputValue(e.target.value); setInputValue2(( Number(e.target.value) * Number(result2) /Number(result)).toFixed(2))}}
        />
        <select
          name=''
          id=''
          onChange={handleResult}
        >
          {currency.map((el) => {
            return (
              <option
                key={el[0]}
                value={el[1]}
              >
                {el[0]}
              </option>
            )
          })}
        </select>
       
      </div>
      <div className='wrapper-converter'>
        <input
          type='number'
          value={inputValue2}
          onChange={(e) =>{ setInputValue2(e.target.value); setInputValue(( Number(e.target.value) * Number(result) /Number(result2)).toFixed(2))}}
          step={'0.01'}
        />
        <select
          name=''
          id=''
          onChange={handleResult2}
        >
          {currency.map((el) => {
            return (
              <option
                key={el[0]}
                value={el[1]}
              >
                {el[0]}
              </option>
            )
          })}
        </select>
        
      </div>
    </div>
  )
}

export default Converter
