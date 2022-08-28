import { Formik, Form, Field} from 'formik';
import { categorias } from '../helpers/categorias';

const FormProducts = () => {

    const listaCategorias = categorias.map((cat) => (
        <option 
            value={cat}
            key={Math.random().toString(36)} 
        > {cat} </option>
    ));
    
    const handleSubmit = async (valores) => {
        try {
            console.log('enviando...');
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    descripcion: '',
                    precio: '',
                    categoria: '',
                    img: '',
                }} 
                
                onSubmit = {async (values, {resetForm}) => {
                    await handleSubmit(values);
                    resetForm();
                }}

                >
                <Form className='mt-10 w-2/4'>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800' 
                            htmlFor="nombre"
                        > Producto:</label>
                        <Field 
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder="Nombre del producto"
                            className="mt-2 block w-full p-3 bg-gray-white"
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800' 
                            htmlFor="descripcion"
                        > Descripcion:</label>
                        <Field 
                            id="descripcion"
                            name="descripcion"
                            type="text"
                            placeholder="Descripcion detallada del producto"
                            className="mt-2 block w-full p-3 bg-gray-white"
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800' 
                            htmlFor="precio"
                        > Precio:</label>
                        <Field 
                            id="precio"
                            name="precio"
                            type="number"
                            placeholder="Precio del producto"
                            className="mt-2 block w-full p-3 bg-gray-white"
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800' 
                            htmlFor="Categoria"
                        > Categoria:</label>
                        <Field 
                            as="select" name="categoria"
                            className="mt-2 block w-full p-3 bg-gray-white"
                        >
                            {listaCategorias}
                        </Field>
                    </div>

                    <input 
                        type="submit"
                        value="Agregar"
                        className='
                            mt-5 p-2 w-full
                            bg-orange-400
                            text-white
                            uppercase font-bold
                            cursor-pointer
                            hover:bg-orange-500'
                    />
                </Form>

            </Formik>
        </>
    )
}

export default FormProducts