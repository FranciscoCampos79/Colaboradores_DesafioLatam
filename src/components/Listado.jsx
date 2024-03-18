const Listado = ({ colaboradores, eliminar }) => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Correo</th>
            <th scope='col'>Edad</th>
            <th scope='col'>Cargo</th>
            <th scope='col'>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores && colaboradores.map(
            (colaborador) =>
              <tr key={colaborador.id}>
                <th scope='row'>{colaborador.id}</th>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td><button onClick={() => eliminar(colaborador)}>Eliminar</button></td>
              </tr>
          )}
        </tbody>
      </table>
    </>
  )
}
export default Listado
