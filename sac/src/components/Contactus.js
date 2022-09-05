import React, { useState, useRef } from 'react'
import "../styles/Contactus.css"
import { MapContainer, TileLayer, useMap,Marker,Popup, Rectangle} from 'react-leaflet'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import 'leaflet/dist/leaflet.css';
function Contactus() {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_form', 'template_gizpzhk', form.current, 'EJe3r1UXX7sEb6mI_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    const rectangle = [
        [41.819522,-88.229691],
        [41.323232,-87.354222]
    ]
    const grayOptions = { color:'gray'}

    return (
      <div className="Contactus">
        <h1>Contact Us</h1>
        <div className='Contactus-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='form-header'>Send us an email for a quote or more information</div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        <div className='Contactus-container'>
            <div className='Contactus-map'>
                <h3>The area that we regularly service is shaded below. </h3>
                <MapContainer className='map' style={{height:"450px",width:"100%"}} center={[41.528354, -87.705075]} zoom={9.3} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Rectangle bounds={rectangle} pathOptions={grayOptions}/>
                </MapContainer>
            </div>

        </div>
      </div>
    );
  }
  
  export default Contactus;
  