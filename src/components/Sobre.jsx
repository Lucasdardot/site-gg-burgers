import "./Sobre.css"
import Button from "./Button"
function Sobre() {
    return (
        <section className="sobre">
            <div className="fundo">
                <div className="content content-sobre">
                    <div className="textSobre">
                        <div className="titleSobre  "><h1 className="sobreTitle">SOBRE NÓS</h1></div>
                        <div className="sobreText">Bem-vindo à GG Burgers,
                            a hamburgueria que leva você a uma nova dimensão de sabor e diversão!
                            Aqui, cada lanche é uma missão, e cada refeição é uma aventura.
                            O ambiente é repleto de referências a jogos icônicos,
                            desde murais vibrantes de pixel art até consoles clássicos dispostos em mesas,
                            criando um cenário perfeito para os amantes de games.
                            Experimente o “Burger do Herói”, um suculento hambúrguer de carne com queijo cheddar, bacon crocante e um toque de molho especial,
                             ou o “Veggie Power-Up”, feito com um saboroso hambúrguer de grão-de-bico, guacamole e alface fresca.

                            Venha para a GG Burgers, onde cada mordida é um level up no seu paladar!</div>
                    </div>
                    <div className="imgSobre">
                        <div className="imgDiv">
                        <img src="src\assets\WhatsApp-Image-2021-12-04-at-17.01.35 1.png" alt="" className="image"/>
                        </div>
                        <div className="botao">
                        <Button texto={"FAÇA SUA RESERVA"}/>
                        </div>
                        
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sobre