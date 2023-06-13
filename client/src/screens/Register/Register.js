import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RegisterCom from './RegisterCom'

function Register() {
  return (
    <div> 
        <Header yes="no"/>
        <RegisterCom/>
        <Footer/>
    </div>
  )
}

export default Register