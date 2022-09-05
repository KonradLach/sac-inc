import React from 'react'
import "../styles/Aboutus.css"
import LP from "../assets/LP.jpeg"
import Hardie from "../assets/Hardie.jpeg"
import Cedar from "../assets/Cedar.jpeg"
import Vinyl from "../assets/Vinyl.jpg"
function Aboutus() {
    return (
      <div className="Aboutus">
          <h2 className='Aboutus-Header'>We strive to provide the best quaility siding in the Chicagoland and North-West Indiana area.</h2>
          <div className='Aboutus-Main'>
                <div className='Aboutus-Para'>
                    <p>We are a small family owned siding buiness established in 2012. We have completed thousands of homes in the Chicago and North-West Indiana area.</p>
                    <p>We service anywhere in the South Chicago suburbs and North-West Indiana.  </p>
                    <p>A few of the products we are proud to offer are: </p> 
                </div>
                <div className='Aboutus-List'><ul>
                    <li>Vinyl Siding</li>
                    <li>LP SmartSide</li>
                    <li>Hardie Board</li>
                    <li>Cedar Siding</li>
                    <li>Sofit</li>
                </ul></div>
                <div className='Leftimgs'>
                    <img src={LP}></img>
                    <img src={Hardie}></img>
                </div>
                <div className='Rightimgs'>
                    <img src={Cedar} alt='Cedar siding'></img>
                    <img src={Vinyl}></img>
                </div>
            </div>
      </div>
    );
  }
  
  export default Aboutus;
  