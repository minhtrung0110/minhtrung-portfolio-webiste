import {FaGithub,FaFacebook} from 'react-icons/fa'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
    return ( 
        <div className='header_socials'>
            <a className="" href="https://www.facebook.com/NguyenDucMinhTrung0110/" target="_blank">
                <FaFacebook/>
            </a>
            <a className="" href="https://www.linkedin.com/in/nguy%E1%BB%85n-%C4%91%E1%BB%A9c-minh-trung-196931210/" target="_blank">
            <BsLinkedin/>
            </a>
            <a className="" href="https://github.com/minhtrung0110" target="_blank">
            <FaGithub/>
            </a>
          
        </div>
     );
}

export default HeaderSocials;