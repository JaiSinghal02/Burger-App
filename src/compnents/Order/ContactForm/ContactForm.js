import React from 'react';
import './ContactForm.css'

const contactForm = (props)=>{
    let addf= ()=>{
        var f=document.getElementById('Form');
        if(f)
        f.scrollIntoView({behavior:'smooth',block:'start'});
    }
    //var btn=document.getElementById("Contact-Submit-Btn");
    //console.log(btn)
    window.addEventListener('animationend',addf)
    //btn.removeEventListener('click',addf)
    return (
        <>
        <div className="Contact-Form-Div" id="Form">
            <form className="Contact-Form">
                <label htmlFor="Name-Input">Your name</label>
                <input className="Input" type="text" name="name" placeholder="Name" id="Name-Input"></input>
                <label >Your Email</label>
                <input className="Input" type="email" name="email" placeholder="Email"></input>
                <label >Your Age</label>
                <input className="Input" type="number" name="age" placeholder="Age"></input>
                <label >Your Phone Number</label>
                <input className="Input" type="text" name="phone-number" placeholder="Phone Number"></input>
                <label >Your Street Address</label>
                <input className="Input" type="text" name="street" placeholder="Stree Address"></input>
                <label >Your Pincode</label>
                <input className="Input" type="number" name="pincode" placeholder="Pin-Code"></input>
                <button id="Contact-Submit-Btn"className="Input Contact-Form-Button" type="submit" onClick={(e)=>props.submitContact(e)}>Submit</button>
            </form>
        </div>
        
        </>
    )
};
export default contactForm;