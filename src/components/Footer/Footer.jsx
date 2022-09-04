import React from 'react'
import '../Footer/footer.css'
import logo from '../../photos/logo.png'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';


export default function Footer() {
    return (
        <>
              <div className="pad">  
            <div className="borde">
                <div className="dash_border"></div>
            </div>
                    <div className="copy">
                        <div className="content1">
                            <div className="right">Copyright © 2021. Osama Aslam</div>
                            <div className="issue">Terms | Privacy Policy</div>
                        </div>
                    </div>
                    </div>
        </>
    )
}
