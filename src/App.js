import './App.css';

//importing modal from components folder
import Modal from './components/modal'

//using stateHook
import { useState } from 'react'; //importing use state from the react library

//importing eventlist 
import EventList from './components/EventList';

//importing title component
import Title from './components/Title'
import NewEventForm from './components/NewEventForm';
function App() {

  const [showModal, setShowModal] = useState(false)
  
  // Outputting lists 
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event] //takes previous events and spread them to the new array and the new events
    })
    setShowModal(false) //closes the modal after the user submits the form
  }


  const handleClick = (id) => {
      //safe practice
      setEvents ((preEvents)=> {
        return preEvents.filter((event) => {
          return id !== event.id
        })
      })
   //retutns a new array that has been filtered from the orginal one
    console.log(id)
    
  }

  const subtitle ="Get it done, Boss"

  return (
    <div className="App">
      <Title title="Upcoming Tasks" subtitle={subtitle}/>
          <div>
            <button className="Modal" onClick={() => setShowModal(true)}>Add New Event</button>
          </div>
    {showEvents && <EventList events={events} handleClick={handleClick}/>}

    {showModal && <Modal  isSalesModal={true}>
       <NewEventForm addEvent={addEvent}/>
    </Modal>}
    </div>
  );
}

export default App;
