import React, { useState } from 'react'
import './RoomCards.css';
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import weatherPng from '../../assets/images/weather_forecast/weather_dashboard_01_main.png';

//import { useTranslation } from "react-i18next";
//import Button from 'react-bootstrap/Button';

// function to select the stars rating
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star"><FontAwesomeIcon icon={faStar} /></span>
          </button>
        );
      })}
    </div>
  );
}

// room cards component
function RoomCards(props) {

  return (
    <div className='m-3'>
      <div className='card col-md-10 '>
        <div className="row align-items-center">

          {/* hotel image */}
          <div className="col-md-5 text-center">
            <div className="container">
              <div className='row align-items-center'>
                <img src={weatherPng} className='img-fluid rounded-start' alt='Room view'></img>
              </div>
            </div>

          </div>

          {/* body */}
          <div class="col-md-5">
            <div className='card-body'>
              <h4 className='card-title'>Grand Gateway</h4>
              <h6 className='text-muted text-'>Downtown Toronto</h6>
              <p className='card-text text-body'>Located in Downtown Toronto, just next to the Eaton Centre and Yorkdale Shopping Centre.</p>
              <span className="wifi"><FontAwesomeIcon icon={faWifi} /> Wifi </span>
              <span className="breakfast"><FontAwesomeIcon icon={faMugHot} /> Breakfast included </span>
              <span className="pool"><FontAwesomeIcon icon={faPersonSwimming} /> Pool </span>
              <span className="pet-friendly"><FontAwesomeIcon icon={faPaw} /> Pet friendly </span>
              <span className="parking"><FontAwesomeIcon icon={faParking} /> Parking available </span>
              <span className="gym"><FontAwesomeIcon icon={faDumbbell} /> Gym </span>
              <div>
                <div className='reviews'>
                  <a className='p-2' href="https://www.google.com/"> See more details </a>
                </div>
                <br></br>
              </div>
              <div className='reviews'>
                <StarRating></StarRating>
                <a className='p-2' href="https://www.google.com/"> See more reviews </a>
              </div>
              <div>
              </div>
            </div>
          </div>

          {/* reserve section */}
          <div class="col-md-2 border-start align-self-center">
            <h6 className='text-body'> Reserve a room </h6>
            <div className='price text-body'>
              <div className='currency'> CAD
                <span className='total-price'> $5,000</span>
              </div>
              <Button variant="primary" size="sm">Reserve</Button>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default RoomCards;