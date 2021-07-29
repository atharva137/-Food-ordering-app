import React, {Fragment} from 'react';

import './Header.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props){

    return (<Fragment>
        <header className="header">
            <h1>ReactMeals</h1>
            <HeaderCartButton click={props.showCart}></HeaderCartButton>
        </header>
        <div className="main-image">
            <img className="img" src="https://images.unsplash.com/photo-1558467523-46113f1fcf72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"/>
        </div>

    </Fragment>);

}

export default Header;