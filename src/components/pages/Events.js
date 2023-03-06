import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { eventsArray } from '../../listEvents';
import Eventcard from '../features/EventCard';
const Events = () => {
  
  return (
    <>
    <h1 align="center" className="p-3">Events!</h1>
    <Row xs={1} md={3} className="g-4">
      {eventsArray.map((events,idx) => (
    <Col align="center" key={idx}>
    <h1>{events.title}</h1>
    <Eventcard events={events}/>
    </Col> 
      ))}
         
           
    </Row>
</>
)
}

export default Events;