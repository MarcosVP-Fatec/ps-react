import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './transferencia/Formulario';
import Tabela from './transferencia/Tabela';

function App() {

  // Objeto pesquisaCampos
  const pesquisaCampos = {
     'dataInicio': ''
    ,'dataFim': ''
    ,'nomeOperadorTransferencia': ''
  }

  // UseState
  const [transferencias, setTransferencias] = useState([]);
  const [objPesquisa, setObjPesquisa] = useState(pesquisaCampos);

  // UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/banco/transferencia/listar")
    .then(ret=>ret.json())
    .then(ret_convertido=>setTransferencias(ret_convertido));
  },[])

  // Atualiza campos de pesquisa
  const atualizaCampos= (ev) => {
      setObjPesquisa({...objPesquisa, [ev.target.name]:ev.target.value});
  }

  // Método pesquisarTransferencia
  const metodoPesquisar = () => {
    let link = "http://localhost:8080/banco/transferencia/listar"
    alert(objPesquisa.dataInicio);
    alert(objPesquisa.dataFim);
    alert(objPesquisa.nomeOperadorTransferencia);
    alert(link);

    // fetch(link)
    // .then(ret=>ret.json())
    // .then(ret_convertido=>setTransferencias(ret_convertido));
  }

  // Retorno
  return (
    <div>
      <Formulario eventoTeclado={atualizaCampos} btnPesquisar={metodoPesquisar} />
      <Tabela listaDeTransferencias={transferencias} />
    </div>
  );
}

export default App;
