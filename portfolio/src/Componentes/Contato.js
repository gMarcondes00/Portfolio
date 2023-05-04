import './Assets/Contato.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add();
function Contato () {
    return (
        <div className="Contatos">
            <h3>Contatos</h3>
            <a href='mailto:g.os.marcondes@gmail.com' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className='iconeC'/>
            </a>
            <a href='https://github.com/gMarcondes00' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className='iconeC'/>
            </a>
            <a href='https://www.linkedin.com/in/gabriel-marcondes-690863256/' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='iconeC'/>
            </a>
            <a href='https://api.whatsapp.com/send/?phone=5512996522060&text&type=phone_number&app_absent=0' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className='iconeC'/>
            </a>
        
        </div>
    )
}

export default Contato