import { useState } from 'react'

const Buscador = ({ colaboradores, setColaboradores, BaseColaboradores }) => {
  const [buscar, setBuscar] = useState('')

  const buscado = (e) => {
    const value = e.target.value.toLowerCase()
    setBuscar(value)

    const filtrarColaborador = colaboradores.filter((colaborador) => {
      if (
        colaborador.nombre.toLowerCase().includes(value) ||
        colaborador.correo.toLowerCase().includes(value) ||
        colaborador.edad.toLowerCase().includes(value) ||
        colaborador.cargo.toLowerCase().includes(value) ||
        colaborador.telefono.toLowerCase().includes(value)
      ) {
        return true
      } else {
        return false
      }
    })
    value === '' ? setColaboradores(BaseColaboradores) : setColaboradores(filtrarColaborador)
  }

  return (
    <input
      className='form-control me-2'
      type='search'
      placeholder='Search'
      aria-label='Search'
      value={buscar}
      onChange={buscado}
    />
  )
}

export default Buscador
