import React from 'react';
import DailyWeather from './dailyWeather'
import { Card } from 'react-bootstrap'

class Weather extends React.Component {

  render() {
    return(
      <>
      {this.props.weather[0].map((element, index) => (
           <Card>
            <Card.Header>
              Weather Info
            </Card.Header>
              <DailyWeather key={index} date={element.valid_date} description={element.description} />
          </Card> 
        ))};
        
      </>
    )
  }
}

export default Weather;