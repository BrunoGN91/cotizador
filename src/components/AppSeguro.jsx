import Formulario from "./Formulario"
import useCotizador from '../hooks/useCotizador';
import Spinner from '../components/Spinner';
import Resultado from "./Resultado";


const AppSeguro = () => {

  const { resultado, cargando } = useCotizador()

  return (
    <>
    <header>
        <h1 className='text-white text-center text-4xl font-bold uppercase'>Cotizador de Seguros</h1>
    </header>
    <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>

        <Formulario/>

        {cargando ? <Spinner/> : <Resultado/>}
    </main>
    </>
  )
}

export default AppSeguro