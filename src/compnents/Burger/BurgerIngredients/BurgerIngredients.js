import React from 'react';
import './BurgerIngredients.css';

const burgerIngredients = (props)=> {
    let ingredient= null;
    if(props.ing==="bread-bottom"){
        ingredient=<div className="BreadBottom"></div>
    }
    else if(props.ing==="bread-top"){
        ingredient=(<div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>);
    }
    else if(props.ing==="patty"){
        ingredient=<div className="Patty"></div>
    }
    else if(props.ing==="cheese"){
        ingredient=<div className="Cheese"></div>
    }
    else if(props.ing==="salad"){
        ingredient=<div className="Salad"></div>
    }
    else if(props.ing==="pickle"){
        ingredient=<div className="Pickle"></div>
    }
    return ingredient;

};
export default burgerIngredients;