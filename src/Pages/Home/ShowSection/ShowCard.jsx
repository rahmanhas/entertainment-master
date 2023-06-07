import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ShowCard = (props) => {
    const navigate = useNavigate()
    console.log(props.show.show);
    const handleDetails = () => {
        navigate(`/detail/${props.show.show.id}`)
    }
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.show.show.image.medium} />
        <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
          <Card.Title>{props.show.show.name}</Card.Title>
          <Card.Text>
            Language: {props.show.show.language}
          </Card.Text>
          <Card.Text>
            {props.show.show.network?.country?.name}
          </Card.Text>
          <Link to={`/detail/${props.show.show.id}`} ><Button variant="primary">View Details</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default ShowCard;