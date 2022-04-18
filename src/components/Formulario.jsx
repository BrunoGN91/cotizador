import React, { Fragment} from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import ErrorMessage from './ErrorMessage'


const Formulario = () => {

     const { datos, handleChangeDatos, setError, error, cotizadorSeguro } = useCotizador()

    const handleSubmit = (e) => {
        e.preventDefault();
       if(Object.values(datos).includes('')) {
            return setError("Error, todos los campos son obligatorios")
       }

       setError('')
       cotizadorSeguro()
       //Cotizar
    }

   
 
  return (
    <>

    <form>
        {error && <ErrorMessage/>}
        <div className='my-5'>
            <label htmlFor="" className='block font-bold text-gray-500 uppercase mb-3'>Marca
            <select
            name="marca"
            value={datos.marca}
            onChange={e => handleChangeDatos(e)}
            className='w-full p-3 bg-white border-gray-200 border rounded mt-3' id="">
                <option 
                value="">--Seleccion</option>
                {MARCAS.map(marca => (
                    <option 
                    key={marca.id}
                    value={marca.id}>{marca.nombre}</option>
                ))}


            </select>

            </label>
        </div>

        <div className='my-5'>
            <label htmlFor="" className='block mb-3 font-bold text-gray-500 uppercase'>Año
            <select
            onChange={e => handleChangeDatos(e)}
            value={datos.year}
            name="year" className='mt-3 w-full p-3 bg-white border-gray-200 border rounded' id="">
                <option value="">--Seleccion</option>
                {YEARS.map(year => (
                    <option value={year.nombre}>{year}</option>
                ))}


            </select>

            </label>
        </div>
        <div className='my-5'>
            <label htmlFor="" className='block mb-3 font-bold text-gray-500 uppercase'>Elegi tu Plan
            </label>
                    <div className='flex gap-3'>
                        {PLANES.map(plan => (
                            <Fragment key={plan.div}>
                                <label htmlFor="">{plan.nombre}</label>
                                <input 
                                onChange={e => handleChangeDatos(e)}
                                
                                type="radio" name="plan" value={plan.id} />
                            </Fragment>
                        ))}
                    </div>
        </div>
        <input 
        onClick={(e) => handleSubmit(e)}
        type="submit" className='w-full bg-indigo-500 text-white cursor-pointer hover:bg-indigo-900 transition-colors uppercase font-bold p-3 rounded-lg' value='Cotizar'/>
    </form>
    </>
  )
}

export default Formulario