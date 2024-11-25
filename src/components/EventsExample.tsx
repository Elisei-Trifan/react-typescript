/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

const EventsExample = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log(value)
  }

  function dragHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log('Drag')
  }

  function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDrag(true)
  }

  function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDrag(false)
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDrag(false)
    console.log('Drop')
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text"></input>
      <button onClick={clickHandler}>Кнопка инпута</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: '200px',
          height: '200px',
          background: 'red',
          marginTop: '15px',
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: '200px',
          height: '200px',
          background: isDrag ? 'green' : 'red ',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      ></div>
    </div>
  )
}

export default EventsExample
