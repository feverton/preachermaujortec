import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topo from './components/Topo';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Categoria from './components/Categoria';
import NotFound from './components/NotFound';
import Rodape from './components/Rodape';
import Livro from './components/Livro';
import axios from 'axios';

class App extends Component {
  state = {
    livros:[],
    categorias:[["frontend","Frontend"],["programacao","Programação"],["design","Design"]]
  }
  componentDidMount() {
    try {
      axios.get('api/todosOsLivros.json').then(retorno=>{
        let livros = retorno.data;
        this.setState({livros});
      });
    } catch(error) {
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }
  render() {
    return (
      <Router>
          <Topo categorias={this.state.categorias} />
          <Switch>
            <Route exact path="/" render={()=><Home livros={this.state.livros} />} />
            <Route path="/categoria/:cat" render={props=>{
              return (<Categoria 
                livros={this.state.livros} 
                categoria={props.match.params.cat} 
                categorias={this.state.categorias} 
              />)
            }} />
            <Route exact path="/catalogo" render={()=><Catalogo livros={this.state.livros} categorias={this.state.categorias} />} />
            <Route path="/livro/:livroSlug" render={props=>{
              const livro = this.state.livros.find(livro => livro.slug === props.match.params.livroSlug);
              if(livro) return <Livro livro={livro} />;
              else return <NotFound />
            }} />
            <Route component={NotFound} />
          </Switch>
          <Rodape />
      </Router>
    );
  }
}

export default App;
