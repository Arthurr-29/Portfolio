import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import "../styles/Homepage.css"
import Menu from "./Menu";

const Homepage =()=>{
    return (

<div className="homepage">
        <Menu/>
    <div className="intro">
        <p className="html">&lt; html &gt;</p>
        <p className="body">&lt; body &gt;</p>
        <br></br>
        <p className="h1">&lt; h1 &gt;</p>
        <h1 className="hey">Hey,</h1>
        <h1 className="jai">I'm Jaideep,</h1>
        <h1 className="web">Web Developer<span className="h1close"> &lt;/h1&gt;</span></h1>
        <p className="p">&lt; p &gt;</p>
        <p className="detail">Front End Developer</p>
        <p className="pc">&lt; /p &gt;</p>
        <div className="scroll">
            <p className="scrl1">scroll down</p>
            <p className="scrl2">scroll down</p>
        </div>
        <div className="icons">
            <p className="icon1"><FaAngleDoubleDown/></p>
            <p className="icon2"><FaAngleDoubleDown/></p>
        </div>
       
    </div>
</div>
    )
}
export default Homepage