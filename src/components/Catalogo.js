import React from 'react';
import { Link } from 'react-router-dom';

const Catalogo = ({livros,categorias}) => {
    
    return (
        <main className="principal">
            {categorias.map(cat=>{
                return(
                    <>
                    <h2>{`Categoria ${cat[1]}`}</h2>
                    <ol>
                        {
                            livros.filter(livro => livro.categoria === cat[0])
                            .map(livro => (
                                <li key={livro.id}>
                                    <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
                                </li>
                            ))
                        }
                    </ol>
                    </>
                )
            })}
        </main>
    );
}

export default Catalogo;