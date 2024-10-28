import { useState } from "react"
import "./Reserva.css"
import emailjs from 'emailjs-com';  

function Reserva() {
    const[formData,setFormData] = useState({
        nome: "",
        data: "",
        horario: "",
        pessoas: "",
        recado: ""
    })


    const handleChange = (e)=>{
        const {name,value} = e.target   
        console.log(e.target)
        console.log("Imput name: ", name)
        console.log("Imput value: ", value)
        
        setFormData(prevState =>({
            ...prevState,
            [name]:value
        }))
        console.log(formData)
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Envio realizado!")
        const userID = "o0tRAvd9Wj6mhnOmG";
        const serviceID = "service_4oeaw5e" 
        const templateID = "template_s6wi8lk"

        emailjs.send(serviceID,templateID,formData,userID)
            .then((response)=>{
                console.log("enivado com sucesso!")
                setFormData({
                    nome: "",
                    data: "",
                    horario: "",
                    pessoas: "",
                    recado: ""
                })
            },(err)=>{
                console.log("ocorreu um problema no envio :( ", err)
            })

        
    }

    return (
        <div className="homebody">
            <div className="fundo conteudo-reserva">
                <form onSubmit={handleSubmit}>
                    <div className="nome box">
                        <label htmlFor="nome">NOME</label>
                        <input type="text" required name="nome" id="nome" onChange={handleChange} value={formData.nome}/>
                    </div>
                    <div className="data box">
                        <label htmlFor="data">DATA</label>
                        <input type="date" required name="data" id="data" onChange={handleChange} value={formData.data}/>
                    </div>
                    <div className="horario box">
                        <label htmlFor="horario">HORÁRIO</label>
                        <input type="time" required name="horario" id="horario" onChange={handleChange} value={formData.horario}/>
                    </div>
                    <div className="pessoas box">
                        <label htmlFor="pessoas">PESSOAS</label>
                        <input type="number" required name="pessoas" id="pessoas" onChange={handleChange} value={formData.pessoas}/>
                    </div>
                    <div className="recado box">
                        <label htmlFor="recado">RECADO</label>
                        <input required type="text" name="recado" id="recado"onChange={handleChange}  value={formData.recado}/>
                    </div>
                    <button className="button-send" type="submit">ENVIAR</button>
                </form>
            </div>

        </div>
    )

}



export default Reserva