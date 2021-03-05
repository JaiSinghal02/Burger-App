import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import './Burger.css'

const burger = (props)=>{
    let cheese=[]
    for(var i=0;i<props.val[1];++i) cheese.push(<BurgerIngredients ing="cheese" key={i}/>)
    let salad=[]
    for(i=0;i<props.val[2];++i) cheese.push(<BurgerIngredients ing="salad" key={i+10}/>)
    let pickle=[]
    for(i=0;i<props.val[3];++i) cheese.push(<BurgerIngredients ing="pickle" key={i+20}/>)
    let patty=[]
    for(i=0;i<props.val[0];++i) cheese.push(<BurgerIngredients ing="patty" key={i+30}/>)
    let check=(cheese.length+salad.length+pickle.length+patty.length)!==0;
    let dispmsg=check?null:"Start adding Ingredients"
    return (
        <div className="Burger">
            <BurgerIngredients ing="bread-top"></BurgerIngredients>
            {cheese.map((p)=>{return p})}
            {salad.map((p)=>{return p})}
            {pickle.map((p)=>{return p})}
            {patty.map((p)=>{return p})}
            {dispmsg}
            <BurgerIngredients ing="bread-bottom"></BurgerIngredients>
            
            
            

        </div>
    )
};
export default burger;