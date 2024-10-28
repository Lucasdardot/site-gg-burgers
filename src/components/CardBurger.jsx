import "./CardBurger.css"

function CardBurger({burger,adicionarAoCarrinho}){
    return(
        <div className="burger-card">
            <div className="img-burger"><img src={`/images/${burger.imagem}`} alt=""/></div>
            <h3 className="burgerName">{burger.nome}</h3>
            <p className="burger-descricao">{burger.descricao}</p>
            <p className="burger-preco">R$ {burger.preco}</p>
            <div className="buttons-quantidade">
                <button onClick={()=> adicionarAoCarrinho(burger)} className="add-burger">ADICIONAR</button>
            </div>
        </div>
    )
}

export default CardBurger