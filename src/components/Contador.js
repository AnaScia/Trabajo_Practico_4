import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={() => this.setState({contador: this.state.contador + 1})}>Incremento</button>
        <button onClick={() => this.setState({contador: this.state.contador - 1})}>Decremento</button>
      </div>
    );
  }
}

export default Contador;
