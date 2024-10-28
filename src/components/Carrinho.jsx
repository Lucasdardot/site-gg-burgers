import "./Carrinho.css"
import { IoCloseSharp } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

function Carrinho({ fecharCarrinho, itensCarrinho }) {
    return (
        <div className="carrinho-principal">
            <div className="carrinho-header">
                <h2>CARRINHO</h2>
                <button className="btn-fechar" onClick={fecharCarrinho}><IoCloseSharp />

                </button>
            </div>
            <div className="carrinhoConteudo">
                {itensCarrinho.length === 0 ?
                    (<p className="carrinho-vazio">seu carrinho está vazio</p>)
                    : (itensCarrinho.map((item) => {
                        <div className="itemCarrinho" key={item.id}>
                            <div>
                                <h3>{item.nome}</h3>
                                <p>quantidade: {item.quantidade}</p>
                                <p>R$: {(item.preco * item.quantidade).toFixed(2)}</p>
                            </div>
                            <div><button className="btn-remover"><FaRegTrashCan /></button></div>
                        </div>
                    })

                    )
                }


            </div>
            <div className="carrinhoFooter">
                <h2>Total: R$100,00</h2>
                <button className="finalizarCompra">Finalizar compra</button>
            </div>


        </div>
    )

}

export default Carrinho