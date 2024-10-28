import "./Navbar.css" 
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar ({abrirCarrinho}){
    return(
        <nav className="nav">
            
            
                <ul>
                    <li><Link to='/'><img src="./src/assets/gg 1.png" alt="" /></Link></li>
                    <li><Link className="item-nav" to='/sobre-nos'>SOBRE NÓS</Link></li>
                    <li><Link className="item-nav" to='/contato'>CONTATO</Link></li>
                    <li><Link className="item-nav" to='/reservas'>RESERVAS</Link></li>
                    <li><Link className="cardapiobutton" to='/cardapio'>CARDÁPIO</Link></li>
                    <li onClick={abrirCarrinho} className="hover-cart"><FaShoppingCart className="cart-btn" /></li>
                </ul>
            
            <div className="carrinho">
               
            </div>
        </nav>
    )
}


export default Navbar