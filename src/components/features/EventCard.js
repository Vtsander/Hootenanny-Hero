import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function Eventcard(props) {
    const events = props.events;
  
    return (
      <Card>
        <Card.Body>
          <Card.Title>{events.title}</Card.Title>
          <Card.Text>${events.price}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    );
  }
  
 
export default Eventcard;