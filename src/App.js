import React from 'react';
import axios from 'axios';
import { Container, Form, Button, Col} from 'react-bootstrap'
import Map from './map.js';
import Weather from './weather.js';
import Movies from './movies.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
    }
  }
  getLocationInfo = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log(url);
    try {
      const location = await axios.get(url);
      const locationArray = location.data;
      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
        longitude: locationArray[0].lon,
        latitude: locationArray[0].lat
      });
      this.getMovie();
      this.getWeather();
    } catch (error) {
      console.error(`Axios request failed: ${error}`);
    }
    
  }
  getWeather = async () => {
    try {
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, { params: {cityName: this.state.searchQuery}});
      console.log(weather.data);
      this.setState({ 
        weatherArray: weather.data,
        displayResults: true
      });

    } catch(error){
      console.error(`Axios request failed: ${error}`);
    }   
  }
  getMovie = async () => {
    try{
      console.log('here in getmovie');
      const movies = await axios.get(`${process.env.REACT_APP_SERVER}/movies`, { params: {city: this.state.searchQuery}});
      console.log('movie data: ', movies.data);
      this.setState({ 
        movieArray: movies.data,
        displayResults: true
      });

    } catch(error){
      console.error(`Axios request failed: ${error}`);
    }
  }
  
  render() {
    return (
      <>
        <div>
        <Container>
          <h1>Welcome</h1>
          <Col>
            {this.state.weatherArray && <Weather weather={this.state.weatherArray}/> }
          </Col>
          <Col>
            {this.state.movieArray && <Movies movies={this.state.movieArray}/>}
          </Col>
          <Col>
            <Container>
              <Form onSubmit={this.getLocationInfo} >
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="search for a city here" onChange={(e) => this.setState({ searchQuery: e.target.value })} />
                  <Form.Text className="text-muted">
                    Where do you want to go?
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Explore!
                </Button>
              </Form>
            </Container>
            {this.state.displayResults &&
              <Map
                displayName={this.state.location.display_name}
                longitude={this.state.longitude}
                latitude={this.state.latitude}
                imgSrc={this.state.imgSrc}
              />
            }
          </Col>
        </Container>
        </div>
      </>
    )
  }
}
export default App;