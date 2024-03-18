const Alert = ({ alerta }) => {
  return (
    <>
      <div className={`alert alert-${alerta.color}`} role='alert' style={{ margin: '20px' }}>
        {alerta.msg}
      </div>
    </>
  )
}

export default Alert
