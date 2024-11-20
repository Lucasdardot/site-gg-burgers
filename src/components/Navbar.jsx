import "./Navbar.css" 
import logoimg from "../assets/gg 1.png"
import { FaShoppingCart,FaBars, FaTimes } from "react-icons/fa";
import {useState} from "react"
import { Link } from 'react-router-dom';
function Navbar ({abrirCarrinho}){
    const[menuAberto,setMenuAberto] = useState(false)
    const togleMenu = ()=>{
        setMenuAberto(!menuAberto)
    }
    return(
        <nav className="nav">
            
                <div className="menu-icon" onClick={togleMenu}>
                    {menuAberto ? <FaTimes/> :<FaBars/>  }

                </div>
                <ul className={`menu ${menuAberto ? 'aberto' : ''}`}>
                    <li><Link to='/'><img src={logoimg} alt="" /></Link></li>
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