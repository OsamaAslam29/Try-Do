import React from 'react'
import '../Contact/contact.css'
import contact from '../../photos/contact.jpg'

export default function Contact() {
  return (
    <div className="contact_container">
             <div className="about_content">
               <div className="contact_heading"> <h3>Contact Us</h3> </div>
                <p className="contact_para">There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered <span>alteration</span> in some form, by injected humour,</p>
                <div className="input">
                    <input type="text" placeholder='Enter Your Name' />
                    <input type="text" placeholder='Enter Your Email' />
                    <input type="text" placeholder='Enter Your Number' />
                    <input type="text" placeholder=' Subject' />
                    <textarea name="text"></textarea>
                    <div className="button">Submit Now</div>
                </div>
             </div>
        
         <div className="right_photo">
            <img src={contact} alt="Error" />
        </div>
       
    </div>
  )
}
