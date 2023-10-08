import React from 'react';
import './landingpage.css';

const Landingpage = () => {


  return (


        <div className="landingpage-container">
        <div className='row'>
        <h4> J <span>B</span></h4>
        
        <h5>Chatty App</h5>
          <div>
            <a href='/signin'><button className='btn btn-primary'>Start Now</button></a>
          </div>
          <div>
          No account yet? Click <a href='/register'><button className='btn btn-link'>here</button></a>
          </div>
        </div>
        </div>

  )
}

export default Landingpage
