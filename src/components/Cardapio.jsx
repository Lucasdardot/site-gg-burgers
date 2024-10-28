import "./cardapio.css"
import burgers from "../dados/burgers.json"
import CardBurger from "./CardBurger"

function Cardapio({adicionarAoCarrinho}) {
    return (
        <div className="homebody">
            <div className="fundo">
                <div className="cardapio">
                    {
                        burgers.map(burger =>(
                            <CardBurger key={burger.id} burger={burger} adicionarAoCarrinho={adicionarAoCarrinho}/>
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Cardapio