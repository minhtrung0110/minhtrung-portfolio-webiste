import style from './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials  from './HeaderSocials';
import clsx from 'clsx'
function Header() {
    return (  
        <header>
            <div className='header_container container'>
                <h5>Hello I'm </h5>
                <h1>Minh Trung</h1>
                <h5 className="text-light" >Front-End Developer</h5>
                <CTA/>
                <HeaderSocials />
            </div>
            <div className='me'>
                <img  src={me} alt='avatar'></img>
            </div>
            <a href="#contact" className='scroll_down '>Scroll Down</a>
            
        </header>
    );
}

export default Header
