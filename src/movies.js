import React from 'react';
import { ListGroup, Accordion, Card, Button } from 'react-bootstrap'

class Movies extends React.Component {

  render() {
    return(
      <>
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="info" eventKey="0">
                View Movies
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{this.props.movies.slice(0,5).map((value, key) => (
                <ListGroup key={key}>
                  <ListGroup.Item variant="info">{value.title}  {value.overview}</ListGroup.Item>
                </ListGroup>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
      </>
    )
  }
}

export default Movies;