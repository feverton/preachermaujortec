import React from 'react';
import Logo from './Logo';
import Navegacao from './Navegacao';

const Topo = (props) => {
    return(
        <header className="topo">
            <Logo />
            <Navegacao categorias={props.categorias} />
        </header>
    );
}

export default Topo;