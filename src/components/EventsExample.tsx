import React, { useState } from 'react'

const EventsExample = () => {
  const [value, setValue] = useState<string>('')

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log(value)
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text"></input>
      <button onClick={clickHandler}>Кнопка инпута</button>
    </div>
  )
}

export default EventsExample
