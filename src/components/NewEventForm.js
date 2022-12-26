import './NewEventForm.css'
import { useState } from 'react'

export default function NewEventForm({ addEvent}) {
    const [title, setTitle] = useState('')
    const[date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const resetForm = ()=> {
      setTitle('')  
      setDate('')
      setDescription('')
    }


    

    const handleSubmit = (e) => {
        e.preventDefault() //prevents the default action of the browser refreshing

        const event = {
            title:title,
            date:date,
            description:description,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)

        addEvent(event)
        resetForm() //resets the form everytime you submit
    }

  return (
    <div>
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span className='span'>Task Title:</span>
            <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} required/>
        </label>
        <label>
            <span>Date:</span>
            <input 
            type="date" 
            onChange={(e) => setDate(e.target.value)} 
            value={date} required/>
        </label>
        <label>
            <span>Description:</span>
            <input 
            type="text" 
            onChange={(e) => setDescription(e.target.value)} 
            value={description} required/>
        </label>
        <button className='submit'>Submit</button>

    </form>
    </div>
  )
}
