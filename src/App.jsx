import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sobre from './components/Sobre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './components/Contato'
import Reserva from './components/Reserva'
import Cardapio from './components/Cardapio'
import Carrinho from './components/Carrinho'

function App() {

  const[itensCarrinho, setItensCarrinho] = useState([])
  console.log(itensCarrinho)

  const adicionarAoCarrinho = (burger)=>{
      console.log(burger)
      setItensCarrinho((prevItems)=>{
          const itemExistente = prevItems.find(item => item.id === burger.id)
          if(itemExistente){
            return prevItems.map(item =>
              item.id === burger.id ? {...item, quantidade: item.quantidade + 1}
              : item
            )
          } else{
            return[...prevItems,{...burger, quantidade:1}]
          }
      })
      abrirCarrinho()
  }

  const removerDoCarrinho = (id)=>{
    const item = itensCarrinho.find((item)=>{
      item.id === id
      console.log(item)
      //se a quantiadde do item é igual a 1, remove o item
      if(item.quantidade === 1){
        setItensCarrinho(itensCarrinho.filter((item =>item.id !==id)))
      }else{
        setItensCarrinho(
          itensCarrinho.map((item)=>( 
            item.id === id 
            ?{...item,quantidade: item.quantidade -1}
            :item
          ))
        )
      }

      //se a quantidade for maior que 1, subtrai da quantidede
    })
  }


  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false)
   const abrirCarrinho = () =>{
     setIsCarrinhoOpen(true)
     console.log(isCarrinhoOpen)
   }

   const fecharCarrinho = () =>{
     setIsCarrinhoOpen(false)
   }
   
  return (
   <Router>
    <Navbar abrirCarrinho={abrirCarrinho}/>
     <div className = {`carrrinho-principal ${isCarrinhoOpen ? 'com-carrinho':''}`}> <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre-nos' element={<Sobre/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='/reservas' element={<Reserva/>}/>
      <Route path='/cardapio' element={<Cardapio adicionarAoCarrinho={adicionarAoCarrinho}/>}/>
    </Routes>

    </div>
    {isCarrinhoOpen && <Carrinho fecharCarrinho ={fecharCarrinho} itensCarrinho = {itensCarrinho} removerDoCarrinho = {removerDoCarrinho}/>}
   </Router>
  )
}

export default App
