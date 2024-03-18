import { useState } from 'react'

const Formulario = ({ colaboradores, setColaboradores, setAlerta }) => {
  const [newcolaborador, setnewcolaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const añadirColaborador = (e) => {
    setnewcolaborador({ ...newcolaborador, [e.target.name]: e.target.value })
  }

  const validar = (e) => {
    e.preventDefault()
    if (
      newcolaborador.nombre === '' ||
      newcolaborador.correo === '' ||
      newcolaborador.edad === '' ||
      newcolaborador.cargo === '' ||
      newcolaborador.telefono === ''
    ) {
      setAlerta({ msg: 'Completa todos los campos', color: 'danger' })
    } else {
      const colaboradorId = { ...newcolaborador, id: Date.now() }
      setColaboradores([...colaboradores, colaboradorId])
      setAlerta({ msg: 'Colaborador agregado', color: 'success' })
      setnewcolaborador({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
      })
    }
  }

  return (
    <>
      <h2>Agregar colaborador</h2>
      <form onSubmit={validar}>
        <div className='mb-3'>
          <input
            type='text'
            name='nombre'
            className='form-control'
            placeholder='Nombre del colaborador'
            onChange={añadirColaborador}
            value={newcolaborador.nombre}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            name='correo'
            className='form-control'
            placeholder='Email del colaborador'
            onChange={añadirColaborador}
            value={newcolaborador.correo}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            name='edad'
            className='form-control'
            placeholder='Edad del colaborador'
            onChange={añadirColaborador}
            value={newcolaborador.edad}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            name='cargo'
            className='form-control'
            placeholder='Cargo del colaborador'
            onChange={añadirColaborador}
            value={newcolaborador.cargo}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            name='telefono'
            className='form-control'
            placeholder='Telefono del colaborador'
            onChange={añadirColaborador}
            value={newcolaborador.telefono}
          />
        </div>
        <button type='submit' className='btn btn-primary px-5'>Agregar colaborador</button>
      </form>
    </>
  )
}

export default Formulario
