import FormProducts from "../components/FormProducts";

const NewProduct = () => {
    return (
        <>
            <h1 className="font-semibold text-3xl text-gray-700">Nuevo Producto</h1>
            <p className='text-gray-400 mt-2'>Llena los siguientes campos para registrar un nuevo producto.</p>

            <FormProducts />
        </>
    )
}

export default NewProduct