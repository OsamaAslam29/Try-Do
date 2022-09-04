import React from 'react'
import '../Portfolio/portfolio.css'
import image from '../../photos/portfolio.jpg'

export default function Portfolio() {
  return (
    <div className="portfolio_container">
            <div className="center">
        <div className="portfolio_heading">Our Portfolio</div>
        <div className="portfolio_para">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</div>
        </div>

           <div className="image_flex">
                    <div className="image_card">
                             <div className="image">
                                 <div className="empty"></div>
                                  <img src={image} alt="" />
                             </div>
                    <div className="position_text">
                            <h5>Development</h5>
                            <h4>Getting tickets to The big <br /> show</h4>
                            <div className="btn-btn">CASE STUDY</div>
                    </div>
                    </div>
                    <div className="image_card">
                             <div className="image">
                             <div className="empty"></div>
                                  <img src={image} alt="" />
                             </div>
                    <div className="position_text">
                            <h5>Development</h5>
                            <h4>Getting tickets to The big <br /> show</h4>
                            <div className="btn-btn">CASE STUDY</div>
                    </div>
                    </div>
                    <div className="image_card">
                             <div className="image">
                             <div className="empty"></div>
                                  <img src={image} alt="" />
                             </div>
                    <div className="position_text">
                            <h5>Development</h5>
                            <h4>Getting tickets to The big <br /> show</h4>
                            <div className="btn-btn">CASE STUDY</div>
                    </div>
                    </div>
            </div>

    </div>
  )
}
