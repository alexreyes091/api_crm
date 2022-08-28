import { useState } from "react"
import Categories from "../components/Categories"

export const Home = () => {

    const [categoriaActiva, setCategoriaActiva] = useState('Croissant');

    
    return (
        <>
            <h1 className="font-semibold text-3xl text-gray-700">Bienvenidos, a Gorry</h1>
            <p className="text-gray-400 mt-2">Descubre lo que necesites fácilmente.</p>

            <Categories 
                categoriaActiva={categoriaActiva}
                setCategoriaActiva={setCategoriaActiva}
            />
        </>
    )
}
