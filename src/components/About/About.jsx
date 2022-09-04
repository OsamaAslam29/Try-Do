import React from 'react'
import  '../About/about.css'
import photo from '../../photos/about.jpg'

export default function About() {
  return (
    <div className="main_container">
        <div className="left_photo">
            <img src={photo} alt="Error" />
        </div>
        <div className="right_text">
               <div className="about_content">
                <h3>About Us</h3>
                <p className="para">There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered <span>alteration</span> in some form, by injected humour, or <br /> randomised words which dont look even slightly believable. If you are going to<br />  use a passage of Lorem Ipsum,</p>
              </div>
              <div className="flex_it">
                <div className="content">
                <h3>Who we are</h3>
                <p className="para">There are many vtions of passages<br />  of Lorem Ipsum available, but the <br /> majority have suffered.</p>
              </div>
               <div className="content">
                <h3>Who we are</h3>
                <p className="para">There are many vtions of passages<br />  of Lorem Ipsum available, but the<br />  majority have suffered.</p>
              </div>
              </div>

              

        </div>
    </div>
  )
}
