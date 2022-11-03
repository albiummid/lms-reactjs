import React, { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'

export default function QuestionCard({
  question = '',
  options = [],
  onChange,
  id,
}) {
  const [selected, setSelected] = useState([])

  return (
    <div
      className={` divide-y space-y-1 rounded-md shadow-fb bg-white pb-6 border-2 duration-500 ${
        selected.length > 0 ? ' border-green-400' : 'border-white'
      } `}
    >
      <div className='p-5'>
        <p>
          <b>{id}</b>. {question}
        </p>
      </div>

      <div id={`${id}`} className='grid lg:grid-cols-2 gap-2 p-5'>
        {options.map((option, idx) => (
          <div
            onClick={() => {
              setSelected((prv) => {
                let data
                if (prv.includes(option)) {
                  data = prv.filter((i) => i !== option)
                } else {
                  data = [...prv, option]
                }
                onChange({
                  id,
                  answer: data,
                })
                return data
              })
            }}
            key={idx}
            className={` px-4 py-2 flex items-center gap-2 cursor-pointer rounded-md ${
              selected?.includes(option)
                ? 'font-bold bg-green-200'
                : 'bg-gray-200'
            }`}
          >
            <BsCheckLg
              className={` text-green-400 ${
                selected?.includes(option) ? 'visible' : 'invisible'
              }`}
            />

            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
