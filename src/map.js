import React from 'react';
import { Container, Card } from 'react-bootstrap'

class Map extends React.Component {
  
  render () {
    return (
      <>
      {/* {this.state.displayResults && */}
        <>
          <Container>
            <Card className="mt-4">
              <Card.Header as="h5">{this.props.displayName}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Longitude: {this.props.longitude}</p>
                  <p>Latitude: {this.props.latitude}</p>
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={this.props.imgSrc} />
            </Card>
          </Container>
        </>
      {/* } */}
      </>
    )
  }
}

export default Map;