import "./Home.css"
import imghome from "../assets/burger.png"
import Button from "./Button"
function Home() {
    return (
        <div className="homebody">
            <div className="fundo">
                <div className="content">
                    <div className="burgerimg">
                    <img src={imghome} alt="" />
                    </div>
                    <div className="texts">
                        <div className="title">
                            <h1 className="title">GG BURGERS</h1>
                        </div>
                        <div className="text">Bem-vindo ao GG Burgers,
                             a hamburgueria onde a paixão por games e a delícia dos hambúrgueres se encontram
                              em uma experiência de refeição de outro nível. Aqui,
                               cada mordida é uma vitória e cada visita,
                                uma nova fase de diversão!</div>
                                <div className="botao">
                                    <Button texto={"PEÇA PELO DELIVERY"}/>
                                </div>
                    </div>
                </div>
            </div>


        </div>


    )
}



export default Home