function Formulario({botao, eventoTeclado, btnPesquisar}){
    return(
        <form>
        <div style={{textAlign: 'left'}}>
            <label htmlFor='dataInicio' style={{width: '100px'}}>Data de In&iacute;cio</label>
            <input type='text' 
                    id='dataInicio' 
                    name='dataInicio'
                    placeholder='<vazio>'
                    onChange={eventoTeclado}
                    data-mask='99/99/9999'
                    className='form-control'
            />

            <label htmlFor='dataFim'>Data de Fim</label>
            <input type='text' 
                   id='dataFim'
                   name='dataFim'
                   placeholder='<vazio>'
                   onChange={eventoTeclado}
                   className='form-control'
            />

            <label htmlFor='nomeOperadorTransferencia'>Nome operador transacionado</label>
            <input type='text'
                   id='nomeOperadorTransferencia'
                   name='nomeOperadorTransferencia'
                   placeholder='<vazio>'
                   onChange={eventoTeclado}
                   className='form-control'
            />

            <input type='button'
                   value='Pesquisar'
                   onClick={btnPesquisar}
                   className='btn btn-primary'/>

        </div>
        </form> 
    )
}

export default Formulario;

