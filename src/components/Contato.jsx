import "./Contato.css"
import { SocialIcon } from 'react-social-icons'

function Contato(){
    
    return(
        <div className="homebody">
            <div className="fundo">
                <div className="main">
                    <div className="title"><h1>CONTATO</h1></div>
                    <div className="cards">
                        <div className="card maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119998.8224094831!2d-43.56206115664063!3d-19.968049799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4491c738dcbb1%3A0x15e77e47f0d1a5d7!2sSpace%20Gamer%20WR!5e0!3m2!1spt-BR!2sbr!4v1727716428672!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}}  loading="lazy"></iframe>
                        </div>
                        <div className="card social">
                            <div className="whatsapp"><div className="icon"><SocialIcon url="https://whatsapp.com" /></div><div className="contact-info">(31) 983937433</div></div>
                            <div className="e-mail"><div className="icon"><SocialIcon url="https://email.com" /></div><div className="contact-info">ggburgers@gmail.com</div></div>
                            <div className="others">
                                <div className="instagram">
                                    <SocialIcon url="https://instagram.com" />
                                </div>
                                <div className="facebook"><SocialIcon url="https://facebook.com" /></div>
                            </div>
                        </div>
                        <div className="card horario">
                            <h2>Horário de funcionamento</h2>
                            <h2>De segunda á domingo</h2>
                            <h1>8:30 - 19:00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato