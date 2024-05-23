import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap aquí

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { codigo: 1, descripcion: 'Coca-Cola', precio: 2.50 },
        { codigo: 2, descripcion: 'Inka-Cola', precio: 2.20 },
        { codigo: 3, descripcion: 'Fanta', precio: 1.70 }
      ]
    };
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Lista de Productos</h1>
        <table className="table table-striped table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio (USD)</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => (
              <tr key={elemento.codigo}>
                <td>{elemento.codigo}</td>
                <td>{elemento.descripcion}</td>
                <td>${elemento.precio.toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => this.borrar(elemento.codigo)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  borrar(cod) {
    var temp = this.state.articulos.filter((el) => el.codigo !== cod);
    this.setState({
      articulos: temp
    });
  }
}

export default App;

