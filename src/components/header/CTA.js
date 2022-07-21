import CV from '../../assets/cv.pdf'
import clsx from 'clsx'
import style from './header.module.scss'

function CTA() {
    return ( 
        <div className={clsx(style.cta)}>
            <a href={CV} download className="btn">Download CV</a>
            <a href="#" className="btn btn-primary">Let's Talk</a>
        </div>
     );
}

export default CTA;