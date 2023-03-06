import React from 'react'
type Props ={
  amount:string
  onChangeInput:(event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSelect:(event: React.ChangeEvent<HTMLSelectElement>) => void
  array:[string, string][]
}
const InputConverter = ({amount, onChangeInput, onChangeSelect, array}:Props) => {
  return (
    <div className='wrapper-converter'>
        <input
          type='number'
          step={'0.01'}
          value={amount}
          onChange={onChangeInput}
        />
        <select
          name=''
          id=''
          onChange={onChangeSelect}
        >
          {array.map((el:any) => {
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
  )
}

export default InputConverter