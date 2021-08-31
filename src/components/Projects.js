import React from 'react';
import HateIt from '../images/projects/H-Ate-It.png'
import After from '../images/projects/After.png'
import Loop from '../images/projects/In the Loop with Drawer.png'

const Projects = () => {
  return (
    <div className="projectSection" id='projectSection'>
       <div className="portfolio">
        <a href="#" className="portfolio_item">
          <img src="x" alt="devaltio-open-source-product" className="portfolio__img"/>
        </a>
      </div>
      <div className="portfolio">
        <a href="x" className="portfolio_item">
          <img src={Loop} alt="in-the-loop" className="portfolio__img"/>
        </a>
      </div>
      <div className="portfolio">
        <a href="#" className="portfolio_item">
          <img src={After} alt="after" className="portfolio__img"/>
        </a>
      </div>
      <div className="portfolio">
        <a href="#" className="portfolio_item">
          <img src={HateIt} alt="hate-it" className="portfolio__img"/>
        </a>
      </div>
    </div>
  )
}

export default Projects;