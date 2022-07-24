import style from './about.css'
import ME  from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
    return (
         <section id="about">
            <h5>Get To Know</h5>
            <h2> About me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-img">
                        <img src={ME} alt="me"/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>None</small>

                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>None</small>

                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Experience</h5>
                            <small>None</small>

                        </article>
                    </div>
                    <p>
                            kjgsdjgashjgfdhsafghfhsafg
                    </p>
                    <a href="#contact" className="btn">Let'Talk</a>
                </div>
            </div>
         </section> 
         );
}

export default About;