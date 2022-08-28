import { categorias } from "../helpers/categorias"

const Categories = ({categoriaActiva, setCategoriaActiva}) => {
    
    const onCategoria = (e) => {
        setCategoriaActiva(e.target.innerText.trim());
    }

    const listaCategorias = categorias.map((cat) =>
        <span 
            onClick={onCategoria}
            key={Math.random().toString(36)}
            className={`
                ${categoriaActiva == cat && 'bg-orange-400 text-white font-semibold' }
                bg-white rounded p-2  m-3 cursor-pointer`
            }> {cat} </span>
    );

    
    return (
        <div className="mt-12 mb-6"> {listaCategorias}</div>
    )
}

export default Categories