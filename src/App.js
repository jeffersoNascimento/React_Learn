import './App.css';
import HelloWorld from "./componentes/HelloWorld"
import SayMyName from './componentes/SayMyName'
import Pessoa from './componentes/Pessoa';

function App() {
  const nome = "Dunga"

  return (
    <div className="App">
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
