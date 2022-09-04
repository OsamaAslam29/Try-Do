import React from 'react'
import '../Blog/blog.css'
import blog1 from '../../photos/blog1.jpg'
import blog2 from '../../photos/blog2.jpg'
import blog3 from '../../photos/blog3.jpg'

export default function Blog() {
  return (
    <div className="blog_container">
           <div className="center">
        <div className="top_heading">Our Blog</div>
        <div className="top_para">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</div>
        </div>

           <div className="image_flex">
                    <div className="image_card">
                             <div className="image">
                                 <div className="empty"></div>
                                  <img src={blog1} alt="" />
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
                                  <img src={blog2} alt="" />
                             </div>
                    <div className="position_text">
                            <h5>Management</h5>
                            <h4>A big ticket gone to be an <br /> interesting </h4>
                            <div className="btn-btn">CASE STUDY</div>
                    </div>
                    </div>
                    <div className="image_card">
                             <div className="image">
                             <div className="empty"></div>
                                  <img src={blog3} alt="" />
                             </div>
                    <div className="position_text">
                            <h5>Design</h5>
                            <h4>The Home of the Future <br /> Could Bebes</h4>
                            <div className="btn-btn">CASE STUDY</div>
                    </div>
                    </div>
            </div>

    </div>
  )
}
