import React from 'react'
import '../Testimonial/testimonial.css'
import pic1 from '../../photos/1.jpg'
import pic2 from '../../photos/2.jpg'
import pic3 from '../../photos/3.jpg'
import pic4 from '../../photos/4.jpg'
import pic5 from '../../photos/5.jpg'
import pic6 from '../../photos/6.jpg'
import pic7 from '../../photos/7.jpg'
import pic8 from '../../photos/8.jpg'

export default function Testimonial() {
  return (
    <div className="testimonial_container">
        <div className="container">
            <div className="top_text">Aklima The standard chunk of Lorem Ipsum used since <br /> the 1500s is reproduced below for those interested. <br /> Sections Bonorum et Malorum original.</div>
            <div className="mid_text">AKLIMA - COO, AMERIMAR ENTERPRISES, INC.</div>
            <div className="short_images">
                <div className="first_row"><img src={pic1} alt="" /></div>
                <div className="first_row"><img src={pic2} alt="" /></div>
                <div className="first_row"><img src={pic3} alt="" /></div>
                <div className="first_row"><img src={pic4} alt="" /></div>
                <div className="first_row"><img src={pic5} alt="" /></div>
            </div>
            <div className="short_images">
                <div className="first_row"><img src={pic6} alt="" /></div>
                <div className="first_row"><img src={pic7} alt="" /></div>
                <div className="first_row"><img src={pic8} alt="" /></div>
            </div>
        </div>

    </div>
  )
}
