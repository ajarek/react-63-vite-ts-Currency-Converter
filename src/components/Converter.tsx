import  { useEffect, useState } from 'react'
import data from '../assets/data.json'
import InputConverter from './InputConverter'

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
    setInputValue(
      (
        (Number(inputValue2) * Number(e.target.value)) /
        Number(result2)
      ).toFixed(2)
    )
  }
  const handleResult2 = (e: { target: { value: any } }) => {
    setResult2(e.target.value)

    setInputValue2(
      ((Number(inputValue) * Number(e.target.value)) / Number(result)).toFixed(
        2
      )
    )
  }

  return (
    <div className='converter'>
      <InputConverter
        amount={inputValue}
        onChangeInput={(e) => {
          setInputValue(e.target.value)
          setInputValue2(
            (
              (Number(e.target.value) * Number(result2)) /
              Number(result)
            ).toFixed(2)
          )
        }}
        onChangeSelect={handleResult}
        array={currency}
      />

      <InputConverter
        amount={inputValue2}
        onChangeInput={(e) => {
          setInputValue2(e.target.value)
          setInputValue(
            (
              (Number(e.target.value) * Number(result)) /
              Number(result2)
            ).toFixed(2)
          )
        }}
        onChangeSelect={handleResult2}
        array={currency}
      />
    </div>
  )
}

export default Converter
