import './ComponentsAssets/SobreMim.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faPhp, faReact } from '@fortawesome/free-brands-svg-icons'

library.add();
function SobreMim () {
    return (
        <div className = "sobreMim">
            <h1>Gabriel Marcondes</h1>
            <div className="tecnologias">
            <FontAwesomeIcon icon={faReact} className="icone" />
            <FontAwesomeIcon icon={faPhp} className="icone" />
            <FontAwesomeIcon icon={faDatabase} className="icone" />
            </div><hr/><br/>
            <div className="">
                <p>Graduando em Ciência e Tecnologia na Universidade Federal de São Paulo</p>
                <p>Realizando cursos online como freeCodeCamp, theOdinProject e projetos propostos pela RocketSeat, busco oportunidades na área de desenvolvimento.</p><br/>
                </div>
            <div>
                <ul className="lista">
                    <li className="list">Javascript</li>
                    <li className="list">React</li>                      
                    <li className="list">PHP</li>
                    <li className="list">C</li>
                    <li className="list">PSQL</li>
                    <li className="list">Uso de APIs</li>
                    <li className="list">HTML & CSS</li>
                </ul>
            </div>
            
        </div>
    )
}

export default SobreMim