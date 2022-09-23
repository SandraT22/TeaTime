import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import brewed from '../img/brewed.jpg';
import onSpoons from '../img/onSpoons.jpg';
import variety from '../img/variety.jpg';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ brewed }
          alt="small containers with loose leaf tea alongside some brewed tea."
        />
        <Carousel.Caption>
          <h3>The best brews are at TeaTime co.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ onSpoons }
          alt="loose leaf teas in wooden spoons"
        />

        <Carousel.Caption>
          <h3>High Quality Natural Teas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ variety }
          alt="bowls filled with a variety of loose leaf teas"
        />

        <Carousel.Caption>
          <h3>Your favorite teas are in stock now!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;