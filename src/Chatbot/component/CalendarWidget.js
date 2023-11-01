// import React, { useState } from 'react';
// import "../../App";

// const StripCalendar = (props) => {
//   const generateDates = () => {
//     const dates = [];
//     const today = new Date();
//     for (let i = 0; i < 30; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);
//       dates.push(date);
//     }
//     return dates;
//   };

//   const [calendarslot, setCalendarslot] = useState(''); // State for the chosen date

//   const selectDate = (date) => {
//     setCalendarslot(date.toLocaleDateString('en-US', {  month: 'short', day: 'numeric',weekday:'short' }));
//     console.log(calendarslot);
//     // Do something with the selected date if needed
//   };

//   return (
//     <div className="strip-calendar">
//       {generateDates().map((date, index) => (
//         <button key={index} className="calendar-day" onClick={() => selectDate(date)}>
//           <div className='datemonth'>
//             <div className="calendar-date">
//               {date.toLocaleDateString('en-US', { day: 'numeric' })}
//             </div>
//             <div className="calendar-month">
//               {date.toLocaleDateString('en-US', { month: 'short' })}
//             </div>
//           </div>
//           {date.toLocaleDateString('en-US', { weekday: 'short' })}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default StripCalendar;





import React, { useState } from 'react';
import "../../App";

const StripCalendar = (props) => {
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const [calendarslot, setCalendarslot] = useState(''); // Moved useState outside generateDates function

  const dates = generateDates();

  const aftercalendar = (selectedDate) => {
    props.state.userData.calenderslot = selectedDate;
    props.actions.aftercalendar();
   
    console.log(selectedDate);
  };

  return (
    <div className="strip-calendar">
      {dates.map((date, index) => (
        <button
          key={index}
          className="calendar-day"
          onClick={() => aftercalendar(date.toLocaleDateString('en-US', {  month: 'short', day: 'numeric',weekday:'short' }))} // Pass the selected date to aftercalendar function
        >
          <div className='datemonth'>
            <div className="calendar-date">
              {date.toLocaleDateString('en-US', { day: 'numeric' })}
            </div>
            <div className="calendar-month">
              {date.toLocaleDateString('en-US', { month: 'short' })}
            </div>
          </div>
          {date.toLocaleDateString('en-US', { weekday: 'short' })}
        </button>
      ))}
    </div>
  );
};

export default StripCalendar;
