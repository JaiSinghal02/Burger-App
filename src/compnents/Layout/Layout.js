import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            showDrawer: false
        }
    }
    toggleDrawer(){
        let check=this.state.showDrawer;
        let newcheck=!check;
        this.setState({showDrawer:newcheck});
    }
render(){
    return(
        <Aux >
            <Toolbar toggle={this.toggleDrawer.bind(this)} show={this.state.showDrawer}/>
            <SideDrawer toggle={this.toggleDrawer.bind(this)} show={this.state.showDrawer}/>
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>
    );

}

}

export default Layout;