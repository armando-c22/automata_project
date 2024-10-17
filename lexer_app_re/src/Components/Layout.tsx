import '../Styles/Layout.css';

function Layout() {
    return(
        <>
        <div className='inputsContainer'>
            <div className='inputArea'>
                <form action="">
                    <div className="actions">
                        <label>Inserte su codigo fuente</label>
                        <div className="btnContainer">
                            <button id='analyzeButton'>Examinar</button>
                            <button id='clearButton'>Limpiar</button>
                        </div>
                    </div>
                    <div className='inputs'>
                        <textarea name="" id="inputTextarea"></textarea>
                    </div>
                </form>
            </div>
            <div className='inputArea'>
                <form action="">
                    <div className="actions">
                        <label>Tokens detectados</label>
                        <div className="btnContainer">
                            <button>Copiar</button>
                        </div>
                    </div>
                    <div className='inputs'>
                        <textarea readOnly name="" id=""></textarea>
                    </div>
                </form>
            </div>
        </div>
        <script src='./methods.ts'></script>
        </>
        
    )
}

export default Layout;