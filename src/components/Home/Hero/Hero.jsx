import React from 'react'
import "./hero.css"
import { useHistory } from 'react-router-dom';
import Heading from "../../Common/header/Header"
import Title from "../../Title/Title"



 const Hero = () => {
  const history = useHistory();
  const handleViewCourseClick = () => {
    // Redirect to the "courses" page
    history.push('/courses');
  };

  return (
    <div>
         <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle="Welcome TO AFS Investement" title="Step To Convert your protfolio green" />
            <p>We led curriculum covers a spectrum of topics, from understanding market dynamics and technical analysis to mastering risk management and portfolio diversification</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            
              <button onClick={handleViewCourseClick}>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
      
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </div>
  )
}
export default Hero;
