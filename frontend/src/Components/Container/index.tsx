import React,{useState, useEffect} from 'react';

import '../../services/api'
import Card from '../Card'

import './style.css';

import api from '../../services/api';
export default function Container() {
    const [pockemon,setPockemon] = useState([]) 
    let [atual,setAtual] = useState(1)

    async function loadPockemon(offset:string){
        const response = await api.get(`/pokemon?offset=${(Number(offset)*18)}&limit=18`)
        const {results} = response.data

        const result = await results.map((item:{name:string,url:string},index:number)=>{
            const id = item.url.substring(34,36)
            return {
                ...item,
                img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.replace('/','')}.png`
            }
        })
        setPockemon(result)
    }

    useEffect(()=>{
        loadPockemon('0')
    },[])

    return (
        <div className="container">
            <aside className='aside'>
                <div className="dropdown">
                    <h1>FILTRO</h1>
                    <div className='dropdown-content'>
                        EM DESENVOLVIMENTO
                        {/* <ul> 
                            <li><input type="checkbox" name="a" id="a"/>Teste</li>
                            <li><input type="checkbox" name="b" id="b"/>Teste</li>
                            <li><input type="checkbox" name="c" id="c"/>Teste</li>
                        </ul> */}
                    </div>
                </div>
            </aside>
            <main className='main'>
                {
                    pockemon.map((item:{name:string,url:string,img:string},index)=>{
                        return (<Card title={item.name} img_src={item.img} price={100} key={index} />)
                    })
                }
                {/* <Pagination offset={2} /> */}
                <div className="pages">
                    <button onClick={()=>{
                            if(atual>1){
                                setAtual(atual-1)
                            }
                            return atual>1?loadPockemon(""+(atual-1)):null
                        }}>Preview</button>
                    <button 
                        onClick={()=>setAtual(atual-2)}
                        className={atual-2<=0?'anim ocult':"anim"}
                    >{atual-2>0?atual-2:""}</button>
                    
                    <button 
                        onClick={()=>setAtual(atual-1)}
                        className={(atual-1)<=0?'anim ocult':"anim"}
                    >
                        {atual-1>0?atual-1:""}
                    </button>

                    <button className='current'>
                        {atual}
                    </button>
                    <button 
                        className={atual<(964/18-1)?'anim':'ocult'} 
                        onClick={()=>setAtual(atual+1)}
                    >
                        {atual+1}
                    </button>
                    <button 
                        className={atual<(964/18-2)?'anim':'ocult'} 
                        onClick={()=>setAtual(atual+2)}>{atual+2}</button>
                    <button onClick={()=>{
                            if(atual<(964/18-1)){
                                setAtual(atual+1)
                            }
                            return atual<(964/18-1)?loadPockemon(""+(atual+1)):null
                        }
                        }>Next</button>
                </div>
            </main>
        </div>
  ) ;
}
