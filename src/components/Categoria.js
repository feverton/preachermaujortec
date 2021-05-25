import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({livros,categoria,categorias}) => {
    const titulo = `Categoria ${categorias.find(cat=>cat[0]===categoria)[1]}`;
    const escreveLivros = () => {
        return livros.filter((lvr)=>lvr.categoria===categoria).map((livro,index)=>(
            <div className="card" key={index}>
                <div className="thumb">
                    <img src={`/imagens/capas/${livro.isbn.replace(/-/g,"")}.jpg`} />
                </div>
                <div className="detalhes">
                    <h3>{livro.nome}</h3>
                    <p>{livro.descricao.slice(0,130) + "..."}</p>
                    <Link to={"/livro/" + livro.slug} key={livro.id}>Leia mais &gt;</Link>
                </div>
            </div>
        ));
    }
    return(
        <main className="principal">
            <h2>{titulo}</h2>
            {escreveLivros()}
        </main>
    );
}

export default Home;