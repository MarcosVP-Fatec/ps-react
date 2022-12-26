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
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoPeriodo, setSaldoPeriodo] = useState(0);

  const trataData = (data) => {
    if (data){
      const data_tratada = data.substring(6,10)+'-'+data.substring(3,5)+'-'+data.substring(0,2);
      return data_tratada;
    }
    return '';
  }  

  // Realiza a presquisa
  const submitPesquisar = (dataInicio, dataFim, nomeOperadorTransferencia) => {
    let link = "http://localhost:8080/banco/transferencia/listar";
    if ( dataInicio && !dataFim){
      dataFim = dataInicio;
    }
    if (!dataInicio && dataFim){
      dataInicio = dataFim;
    }

    if (dataInicio && nomeOperadorTransferencia){
      link += "?dIni="+trataData(dataInicio)+" 00:00:00&dFim="+trataData(dataFim)+" 23:59:59&nomeOperadorTransacao="+nomeOperadorTransferencia;
    } else if (dataInicio){
      link += "?dIni="+trataData(dataInicio)+" 00:00:00&dFim="+trataData(dataFim)+" 23:59:59";
    } else if (nomeOperadorTransferencia){
      link += "?nomeOperadorTransacao="+nomeOperadorTransferencia;
    }
    fetch(link)
    .then(ret=>ret.json())
    .then(ret_convertido=>setTransferencias(ret_convertido));
  }

  // UseEffect
  useEffect(()=>{
    submitPesquisar(null,null,null);
  },[])

  // Atualiza campos de pesquisa
  const atualizaCampos = (ev) => {
      setObjPesquisa({...objPesquisa, [ev.target.name]:ev.target.value});
  }

  // Método pesquisarTransferencia
  const metodoPesquisar = () => {
    submitPesquisar(objPesquisa.dataInicio === ''?null:objPesquisa.dataInicio
                   ,objPesquisa.dataFim    === ''?null:objPesquisa.dataFim
                   ,objPesquisa.nomeOperadorTransferencia === ''?null:objPesquisa.nomeOperadorTransferencia);
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
