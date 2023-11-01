import React from 'react'

const Morningslot = (props) => {

  const afterslot = (selectedtime) => {
    props.state.userData.timeslot = selectedtime;
    const { calenderslot, timeslot} = props.state.userData;
    props.actions.afterslot(calenderslot,timeslot);
   
    
  };



  return (
    <div className='slots'>
      <div className='morning'>
        <h4 className='labelslot'>Morning</h4>
        <div className='morningslotbtns'>
            <button className='slotbutton' onClick={() => afterslot('9 AM')}> 09:00 AM</button>
            <button className='slotbutton'onClick={() => afterslot('10 AM')}> 10:00 AM</button>
            <button className='slotbutton'onClick={() => afterslot('11 AM')}> 11:00 AM</button>
            <button className='slotbutton'onClick={() => afterslot('12 AM')}> 12:00 AM</button>
        </div>
      </div>
      <div className='afternoon'>
      <h4 className='labelslot'>Afternoon</h4>
        <div className='afternoonlotbtns'>
            <button className='slotbutton' onClick={() => afterslot('2 PM')}> 02:00 PM</button>
            <button className='slotbutton'onClick={() => afterslot('3 PM')}> 03:00 PM</button>
            <button className='slotbutton' onClick={() => afterslot('4 PM')}> 04:00 PM</button>
            <button className='slotbutton' onClick={() => afterslot('5 PM')}> 05:00 PM</button>
        </div>
      </div>
      <div className='evening'>
      <h4 className='labelslot'>Evening</h4>
        <div className='eveninglotbtns'>
            <button className='slotbutton'onClick={() => afterslot('6 PM')}> 06:00 PM</button>
            <button className='slotbutton'onClick={() => afterslot('7 PM')}> 07:00 PM</button>
            <button className='slotbutton'onClick={() => afterslot('8 PM')}> 08:00 PM</button>
            <button className='slotbutton'onClick={() => afterslot('9 PM')}> 09:00 PM</button>
        </div>
      </div>
    </div>
  )
}

export default Morningslot
