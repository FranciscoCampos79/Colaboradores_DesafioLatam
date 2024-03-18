import { useState } from 'react'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alert from './components/Alert'
import { baseColaboradores } from './BaseColaboradores'
import Buscador from './components/Buscador'

const App = (buscar) => {
  const [colaboradores, setColaboradores] = useState(baseColaboradores)
  const [alerta, setAlerta] = useState({ msg: '', color: '' })

  const eliminar = (colaborador) => {
    const eliminarColaborador = colaboradores.filter(el => el.id !== colaborador.id)
    setColaboradores(eliminarColaborador)
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <h1>Lista de colaboradores</h1>

            <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} />
            <Listado colaboradores={colaboradores} eliminar={eliminar} />
          </div>
          <div className='col-lg-4'>
            <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setAlerta={setAlerta} />
            <Alert alerta={alerta} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
