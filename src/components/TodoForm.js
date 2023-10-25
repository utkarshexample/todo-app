import React, {useEffect, useState, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('');
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (  
        <>
        <input
        type='text'
        placeholder='Update the Task'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
         />
         <button className='todo-button'>Update</button>
         </>
        ) :
        (
            <>
        <input
        type='text'
        placeholder='Add To Do'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
         />
         <button className='todo-button'>Add</button>
         </>
        )}
    </form>
  )
}

export default TodoForm