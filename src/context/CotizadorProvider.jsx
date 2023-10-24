import { createContext, useState } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')

  const handleChangeDatos = e => {
    setDatos({
      // primero tomamos todos los datos que tenemos antes de llamar el evento
      ...datos,
      // e.target.name no se puede usar directamente como key de un objeto, pero si se pone entre corchetes si es válido
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    // Una base

    // Obtener diferencia de años

    // Hay que restar el 3% por cada año

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%

    // Basico 20%
    // Completo 50%
  }

  return(
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}
export default CotizadorContext