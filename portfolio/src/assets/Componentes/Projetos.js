import './css/Projetos.scss';
import PedraPapel from'./images/PedraPapel.png';
import Calculadora from'./images/Calculadora.png';
import Pomodoro from'./images/Pomodoro.png';
import Quote from'./images/Quote.png';
import Tempo from'./images/Tempo.png';

function Projetos (){
    return (
        <div className="Projetos">
            <h1>Meus Projetos!</h1>
            <div className="container">
                <div className="wrapper">
                    <div className="projetoContainer">
                        <a href="https://github.com/gMarcondes00/Rock-Paper-Scissor" target='_blank' rel="noreferrer">
                        <img src={PedraPapel} className="imagem" alt=""/>
                        <p>Pedra Papel e Tesoura em JavaScript</p>
                        </a>
                    </div>
                    <div className="projetoContainer">
                        <a href="https://github.com/gMarcondes00/CalculatorJs" target='_blank' rel="noreferrer">
                        <img src={Calculadora} className="imagem" alt="" target="_blank"/>
                        <p>Calculadora em JavaScript</p>
                        </a>
                    </div>
                    <div className="projetoContainer">
                        <a href="https://github.com/gMarcondes00/Pomodoro" target='_blank' rel="noreferrer">
                        <img src={Pomodoro} className="imagem" alt=""/>
                        <p>Pomodoro em JavaScript</p>
                        </a>
                    </div>
                    <div className="projetoContainer">
                        <a href="https://github.com/gMarcondes00/quote-machine" target='_blank' rel="noreferrer">
                        <img src={Quote} className="imagem" alt=""/>
                        <p>Gerador de citação em JavaScript com uso de API</p>
                        </a>
                    </div>
                    <div className="projetoContainer">
                        <a href="https://github.com/gMarcondes00/TempoJS" target='_blank' rel="noreferrer">
                        <img src={Tempo} className="imagem" alt=""/>
                        <p>Previsão do tempo em JavaScript com uso de API</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Projetos;

//C:\Users\Gabriel\Documents\GitHub\Portfolio\portfolio\src\Componentes