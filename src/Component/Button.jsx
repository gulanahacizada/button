import React from 'react'
import './Button.css'
function Button() {
    let flag=true;
    const first =()=>{
    let p=document.querySelector(".p1")
    if(flag){
        p.style.display="block"
    } else{
        p.style.display="none"
    } flag=!flag
    }
    const second= ()=>{
        let btn=document.querySelector(".second")
        btn.style.background="red"
        btn.style.color="white"
        btn.style.border="10px dotted white"
        alert("Hopefully our team will win")
    }
    const on=()=>{
        let p=document.querySelector(".p2")
        if(flag){
            p.style.display="block"
        } else{
            p.style.display="none"
        } flag=!flag
        }
  return (
    <div class="main">
        <div class="small">
        <button onClick={first} className="first">Text</button>
        <button className="second"onClick={second}>WarnMessage</button>
        <button onMouseOver={on} onMouseOut={on}>Hint</button>
        </div>
        <p className="p1">Hello Teacher!Give us second chance,please...</p>
        <p className="p2">50 Point!</p>
    </div>
  )
  }
export default Button