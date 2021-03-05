import React, {Component} from 'react';
import './Modal.css'
import BackDrop from '../Backdrop/BackDrop';
import Aux from '../../../hoc/Auxillary';

class Modal extends Component{
    //const zval={z-index:props.showModal?100:-100;}
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.showModal !== this.props.showModal || this.props.children!==nextProps.children;
    }
    componentDidUpdate(){
        console.log("Modal Updates...");
    }
    render(){
        return(
            <Aux>
    
            <BackDrop showBack={this.props.showModal}/>
            <div className="Modal" style={{
                transform: this.props.showModal?('translateZ(100)','rotateZ(360deg)'):('translateZ(-300)','rotateZ(200deg)'),
                zIndex:this.props.showModal?'300':'-300',
                opacity: this.props.showModal?'1':'0'
            }}>
                {this.props.children}
                
            </div>
            </Aux>
        );

    }

}

export default Modal;