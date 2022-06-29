import Reloj from './components/Reloj';
import Contador from './components/Contador';
import RequestComponent from './components/RequestComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <h3>Punto 1:</h3>
        <Contador/>
      </div>

      <div>
      <h3>Punto 2:</h3>
        <Reloj/>
      </div>
      
      <div>
      <h3>Punto 3:</h3>
        <RequestComponent/>
      </div>
    </div>
  );
}

export default App;
