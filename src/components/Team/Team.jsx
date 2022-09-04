import React from 'react'
import '../Team/team.css'
import first from '../../photos/first.jpg'
import second from '../../photos/second.jpg'
import third from '../../photos/third.jpg'
import forth from '../../photos/forth.jpg'
import fifth from '../../photos/fifth.jpg'
import sixth from '../../photos/sixth.jpg'
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Team() {
  return (
    <div className="team_container">
           <div className="center">
        <div className="team_heading">Our Team</div>
        <div className="team_para">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</div>
       
           </div>
        <div className="team_flex">
            <div className="flex_img">
                    <div className="team_card">
                                  <img src={first} alt="" />
                    </div>
                <div className="team_card">
                                  <img src={second} alt="" />
                    </div>
                    <div className="team_card">
                                  <img src={third} alt="" />
                    </div>
            </div>
                  <div className="flex_img">
                    <div className="team_card">
                                  <img src={forth} alt="" />
                    </div>
                    <div className="team_card">
                                  <img src={fifth} alt="" />
                    </div>
                    <div className="team_card">
                                  <img src={sixth} alt="" />
                    </div>
                 </div>
        </div>
    </div>
  )
}
