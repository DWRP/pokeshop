import React from 'react'
import './style.css'

interface HeaderProps{
    title?:string
    img_src?:string
    img_alt?:string
    price?:number
  }

 const Card:React.FC<HeaderProps> = ({title,img_src,img_alt,price}) => {
    return (
            <div className="card">
                <img src={img_src?img_src:""} alt={img_alt?img_alt:""}/>
                <h3>R$ {price?price:0}</h3>
                <h2>{String(title).replace(String(title)[0],String(title)[0].toUpperCase())}</h2>
                <button className='bt show'>VISUALIZAR</button>
                <button className='bt buy'>COMPRAR</button>
            </div>
    )
}


export default Card