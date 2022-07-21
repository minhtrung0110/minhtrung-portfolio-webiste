import style from './header.module.scss'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials  from './HeaderSocials';
import clsx from 'clsx'
function Header() {
    return (  
        <header>
            <div className={clsx(style.header_container,'container')}>
                <h5>Hello I'm </h5>
                <h1>Minh Trung</h1>
                <h5 className="text-light" >Front-End Developer</h5>
                <CTA/>
                <HeaderSocials />
            </div>
            <div className={clsx(style.me)}>
                <img src={me} alt='ávatar'></img>
            </div>
            <a href="#contact" className={clsx(style.scroll_down )}>Scroll Down</a>
            
        </header>
    );
}

export default Header
