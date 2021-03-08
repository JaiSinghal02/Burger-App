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
            <form className="Contact-Form" onSubmit={(e)=>props.submitContact(e)}>
                <label htmlFor="Name-Input">Your name</label>
                <input className={"Input "+props.validateClass[0]} type="text" name="name" placeholder="Name" id="Name-Input" onChange={(event)=>props.changed(event,"name")}></input>
                <label >Your Age</label>
                <input className={"Input "+props.validateClass[1]} type="number" name="age" placeholder="Age" onChange={(event)=>props.changed(event,"age")}></input>
                <label >Your Email</label>
                <input className="Input" type="email" name="email" placeholder="Email" onChange={(event)=>props.changed(event,"email")}></input>
                <label >Your Phone Number</label>
                <input className={"Input "+props.validateClass[2]} type="number" name="phone-number" placeholder="Phone Number" onChange={(event)=>props.changed(event,"phone_number")}></input>
                <label >Your Street Address</label>
                <input className={"Input "+props.validateClass[3]} type="text" name="street" placeholder="Street Address" onChange={(event)=>props.changed(event,"street")}></input>
                <label >Your Pincode</label>
                <input className={"Input "+props.validateClass[4]} type="number" name="pincode" placeholder="Pin-Code" onChange={(event)=>props.changed(event,"pincode")}></input>
                <button 
                    id="Contact-Submit-Btn"
                    className="Input Contact-Form-Button" 
                    type="submit" 
                    disabled={props.btnCheck}
                    onMouseEnter={props.validateInfo}>
                
                    Submit
                </button>
            </form>
        </div>
        
        </>
    )
};
export default contactForm;