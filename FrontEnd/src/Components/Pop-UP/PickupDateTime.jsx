import React, { useState ,useEffect} from 'react';
import './PickupDateTime.css'
import TimePopUp from './TimePopUp';

function PickupDateTime({setSdate,setEdate}) {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');

    useEffect(() => {
    
    let startDate = formatDate(pickupDate) +","+formatTime(pickupTime);
    let endDate = formatDate(dropoffDate) +","+formatTime(dropoffTime);

    console.log(startDate);
    console.log(endDate);

    localStorage.setItem('timeLS', JSON.stringify({
      StartDate: startDate.toLocaleString(),
      EndDate: endDate.toLocaleString()
    }));
  }, [pickupDate, pickupTime, dropoffDate, dropoffTime]);

  const [total_hrs, setTotalHrs] = useState(0);

  const start = new Date(`${pickupDate}T${pickupTime}:00`);
  const end = new Date(`${dropoffDate}T${dropoffTime}:00`);
  const total = (end - start) / (1000 * 60 * 60);

  localStorage.setItem('total_hrs', total);


  
  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
  };

  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  const handleDropoffDateChange = (event) => {
    setDropoffDate(event.target.value);
  };

  const handleDropoffTimeChange = (event) => {
    setDropoffTime(event.target.value);
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const formatTime = (time) => {
    return new Date(`1970-01-01T${time}:00`).toLocaleTimeString('en-US');
  };

  console.log(total);

  return (
    <section style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    }}
    className="dates"
    >
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:"20px",
        justifyContent:"center",
        margin:"20px",
      }}>
        <div style={{
          background:"#10A310",
          color:"white",
          fontWeight:"bold",
          padding:"10px",
          borderRadius:"10px"
        }}>
          <h3>Pickup Date:</h3>
          <div >
            <input type="date" value={pickupDate} onChange={handlePickupDateChange} />
            <input type="time" value={pickupTime} onChange={handlePickupTimeChange} />
          </div>
        </div>
        
        <div style={{
          background:"#10A310",
          color:"white",
          fontWeight:"bold",
          padding:"10px",
          borderRadius:"10px"
        }}>
          <h3>Dropoff Date:</h3>
          <div style={{
            display:"flex",
            gap:"20px",
            alignItems:"center"
          }}>
            <input type="date" value={dropoffDate} onChange={handleDropoffDateChange} />
            <input type="time" value={dropoffTime} onChange={handleDropoffTimeChange} />
          </div>
        </div>
      </div>
      <div style={{
          fontWeight:"bold",
          padding:"10px",
          borderRadius:"10px",
          width:"49%",
          margin:"auto",
          fontSize:"1.2rem",
          border:"2px solid black"
        }}>
        <ul>
          <li>
           <p>Selected Pickup Date: {pickupDate ? formatDate(pickupDate) : "Date not selected"}, {pickupTime ? formatTime(pickupTime) : "Time not selected"}</p>
          </li>
          <li>
            <p>Selected Dropoff Date: {dropoffDate ? formatDate(dropoffDate) : "Date not selected"}, {dropoffTime ? formatTime(dropoffTime) : "Time not selected"}</p>
          </li>
        </ul>
    </div>
    </section>
  );
}

export default PickupDateTime;