import './Assets/Projetos.css';
import PedraPapel from'./Assets/PedraPapel.png';
import Calculadora from'./Assets/Calculadora.png';
import Pomodoro from'./Assets/Pomodoro.png';
import Quote from'./Assets/Quote.png';
import Tempo from'./Assets/Tempo.png';

function Projetos (){
    return (
        <div className="Projetos">
            <h1>Meus Projetos!</h1>
            <div className="container">
                <div className="wrapper">
                    <div>
                        <a href="https://github.com/gMarcondes00/Rock-Paper-Scissor">
                        <img src={PedraPapel} className="imagem" alt="" target="_blank"/>
                        </a>
                        <p>Pedra Papel e Tesoura em JavaScript</p>
                    </div>
                    <div>
                        <a href="https://github.com/gMarcondes00/CalculatorJs">
                        <img src={Calculadora} className="imagem" alt="" target="_blank"/>
                        </a>
                        <p>Calculadora em JavaScript</p>
                    </div>
                    <div>
                        <a href="https://github.com/gMarcondes00/Pomodoro">
                        <img src={Pomodoro} className="imagem" alt="" target="_blank"/>
                        </a>
                        <p>Pomodoro em JavaScript</p>
                    </div>
                    <div>
                        <a href="https://github.com/gMarcondes00/quote-machine">
                        <img src={Quote} className="imagem" alt="" target="_blank"/>
                        </a>
                        <p>Gerador de citação em JavaScript com uso de API</p>
                    </div>
                    <div>
                        <a href="https://github.com/gMarcondes00/TempoJS">
                        <img src={Tempo} className="imagem" alt="" target="_blank"/>
                        </a>
                        <p>Previsão do tempo em JavaScript com uso de API</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Projetos;

//C:\Users\Gabriel\Documents\GitHub\Portfolio\portfolio\src\Componentes