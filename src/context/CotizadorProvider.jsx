import { createContext, useState } from 'react'
import { obtenerDiferenciaAnual, calcularMarca, calcularPlan, formatearDinero } from '../helpers'


const CotizadorContext = createContext();
const CotizadorProvider = ({children}) => {

    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);


const handleChangeDatos = e => {
     setDatos({
         ...datos,
         [e.target.name] : e.target.value
     })
 }   

 const cotizadorSeguro = () => {
     let resultado = 2000;
    const diferencia = obtenerDiferenciaAnual(datos.year);

    resultado -= ((diferencia * 3) * resultado) / 100
    resultado *= calcularMarca(datos.marca);
    resultado *= calcularPlan(datos.plan)
    resultado = formatearDinero(resultado);
    
    setCargando(true)
    setTimeout(() => {
        setResultado(resultado)
        setCargando(false)
    },1000)
 }
    return(
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            setError,
            error,
            cotizadorSeguro,
            resultado,
            cargando
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