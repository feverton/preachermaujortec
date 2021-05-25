import React from 'react';
import { NavLink } from 'react-router-dom';
let linkCorrente = {
    backgroundColor:"#000000",
    color:"#ffffff"
}

const Navegacao = ({categorias}) => {
    return(
        <ul>
            <li><NavLink exact activeStyle={linkCorrente} to="/">Home</NavLink></li>
            {categorias.map(cat=>{
                return (
                    <li><NavLink exact activeStyle={linkCorrente} to={`/categoria/${cat[0]}`}>{cat[1]}</NavLink></li>
                )
            })}
            <li><NavLink exact activeStyle={linkCorrente} to="/catalogo">Catálogo</NavLink></li>
        </ul>
    );
}

export default Navegacao;