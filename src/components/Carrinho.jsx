import "./Carrinho.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

function Carrinho({ fecharCarrinho, itensCarrinho, removerDoCarrinho }) {
    const total = itensCarrinho.reduce((acumulador, item)=>{return acumulador + item.preco * item.quantidade},0)
    return (
        <div className="carrinho-principal">
            <div className="carrinho-header">
                <h2>CARRINHO</h2>
                <button className="btn-fechar" onClick={fecharCarrinho}><IoCloseSharp /></button>
            </div>
            <div className="carrinhoConteudo">
                {itensCarrinho.length === 0 ? (
                    <p className="carrinho-vazio">Seu carrinho está vazio</p>
                ) : (
                    itensCarrinho.map((item) => (
                        <div className="itemCarrinho" key={item.id}>
                            <div>
                                <h3>{item.nome}</h3>
                                <p>Quantidade: {item.quantidade}</p>
                                <p className="item-preco">R$: {(item.preco * item.quantidade).toFixed(2)}</p>
                            </div>
                            <div>
                                <button onClick={() => {
                                    removerDoCarrinho(item.id)
                                }} className="btn-remover"><FaRegTrashCan /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="carrinhoFooter">
                <h2 className="preco-total">Total: { total.toFixed(2)}</h2>
                <button className="finalizarCompra">Finalizar compra</button>
            </div>
        </div>
    );
}

export default Carrinho;