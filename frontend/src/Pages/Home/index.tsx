import React from 'react'

import Header from '../../Components/Header'
import Container from '../../Components/Container'
import Footer from '../../Components/Footer'

import './style.css'
import logo from '../../assets/logo.svg'

export default function Home() {
    return (
        <>
            <Header img_src={logo} item={String(localStorage.getItem('item'))}/>
            <Container />
            <Footer />
        </>
  ) ;
}
