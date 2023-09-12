import './App.css';
import SayMyName from './componentes/SayMyName'
import Pessoa from './componentes/Pessoa'
import Frase from './componentes/Frase';

function App() {
  const nome = "Dunga"

  return (
    <div className="App">
      <h1>Testando CSS no h1</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Jefferson"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Jefferson" 
      idade="32" 
      profissao="programador" 
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
