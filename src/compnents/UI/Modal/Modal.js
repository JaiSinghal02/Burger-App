import React from 'react';
import './Modal.css'
import BackDrop from '../Backdrop/BackDrop';
import Aux from '../../../hoc/Auxillary';

const modal=(props)=>{
    //const zval={z-index:props.showModal?100:-100;}
    return(
        <Aux>

        <BackDrop showBack={props.showModal}/>
        <div className="Modal" style={{
            transform: props.showModal?'translateZ(100)':'translateZ(-300)',
            transform: props.showModal?'rotateZ(360deg)':'rotateZ(200deg)',
            zIndex:props.showModal?'300':'-300',
            opacity: props.showModal?'1':'0'
        }}>{console.log(props.showModal)}
            {props.children}
            
        </div>
        </Aux>
    );

}

export default modal;