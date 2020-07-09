import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {FiSearch, FiShoppingCart} from 'react-icons/fi'
import './style.css'

interface HeaderProps{
  title?:string
  img_src?:string
  img_alt?:string
  item?:string
}

const Header:React.FC<HeaderProps> = ({title,img_src,img_alt,item}) => {
  
  const [itens,setItens] = useState([])

  useEffect(()=>{
    const convItem = item?JSON.parse(item):''
    setItens(convItem)
  },[item])

  return (
      <header className='header'>
        {
            title?<h1>{title}</h1>:""
        }
        <Link to='/' className='logo-link'>
            <img src={img_src} alt={img_alt} className='logo'/>
        </Link>
        
        <div className="search_main">
            <input type="search" name="find" id="find" className='search'/>
            <button className='inout search_button'><FiSearch /></button>
        </div>
        <div className='loginout'>
        <Link to='/Cart' className='inout'>
            <FiShoppingCart size='30px' alignmentBaseline='central'/>
            {itens.length}
        </Link>
        </div>
        {/* {name?<h3>Wecome, {name}</h3>:<div className='loginout'><button className='inout' disabled>Logar</button><button className='inout' disabled>cadastrar</button></div>} */}
      </header>
  )
}

export default Header;