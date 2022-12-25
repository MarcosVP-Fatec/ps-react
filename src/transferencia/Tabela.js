function Tabela({listaDeTransferencias}){
    return(
        <table className='table'>
            <thead>
                <tr text-align='left'>
                    <th colSpan={3}>Saldo Total:</th>
                    <th colSpan={2}>Saldo No Per&iacute;odo:</th>
                </tr> 
                <tr>
                    <th><b>Dados</b></th>
                    <th><b>Valentia</b></th>
                    <th><b>Tipo</b></th>
                    <th><b>Nome operador transacionado</b></th>
                    <th><b>Op&ccedil;&atilde;o</b></th>
                </tr>
            </thead>
            <tbody>
                {
                    listaDeTransferencias.map( (obj, indice) => (
                        <tr key={indice}>
                            <td>{obj.dataTransferencia.substring(8,10)+'/'+
                                 obj.dataTransferencia.substring(5,7)+'/'+
                                 obj.dataTransferencia.substring(0,4)}</td>
                            <td>{obj.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</td>
                            <td>{obj.tipo}</td>
                            <td>{obj.nomeOperadorTransacao?obj.nomeOperadorTransacao:obj.conta.nomeResponsavel}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>

    )
}

export default Tabela;