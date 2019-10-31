import React,{useState} from 'react'

import Header from '../../components/Landing/Header/Header'
import Why from '../../components/Landing/Why/Why'
import Transparency from '../../components/Landing/Transparency/Transparency'
import Checkout from '../../components/Landing/checkout/Checkout'
import Join from '../../components/Landing/Join/Join'
import Slider from '../../components/Landing/Slider/Slider'
import Footer from '../../components/Landing/Footer/Footer'
import Sidenav from '../../components/UI/Sidenav/Sidenav'
const Landing = props => {
    const [showSideNav, setShowSideNav] = useState(false)
    const sideNavHandler = () => {
        setShowSideNav(false)
    }
    const toggleHandler = () => {
        setShowSideNav(!showSideNav)
        console.log('ki')
    }
    return (
        <>
        <Sidenav open={showSideNav} closed={sideNavHandler}/>
        <Header toggleClick={toggleHandler}/>
        <Why/>
        <Transparency/>
        <Checkout/>
       <section style={{background:'#effbf8',paddingTop:'4rem',marginTop:'8rem',paddingBottom:'6rem'}}>
       <Slider/>
        <Join/>
       </section>
        <Footer/>
        </>
    )
}


export default Landing