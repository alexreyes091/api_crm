import { Link, Outlet, useLocation } from 'react-router-dom';
import mainLogo from "../assets/logo.png"

const Layout = () => {
    const {pathname} = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-2/12 bg-white px-5 py-5">
                <img src={mainLogo} className="w-10 m-auto mb-2" alt="logotipo" />
                <hr />
                <nav className='mt-4'>
                    <Link
                        className={`
                            ${pathname === '/menu' ?'text-orange-500' : 'text-gray-700' }
                            text-md block mt-5 hover:text-orange-500 font-semibold text-center
                        `} to="/menu">MENU</Link> 
                    
                    <Link 
                        className={`
                            ${pathname === '/producto/nuevo' ?'text-orange-500' : 'text-gray-700' }
                            text-md block mt-5 hover:text-orange-500 font-semibold text-center
                        `} to="/producto/nuevo">PRODUCTOS</Link> 
                </nav>
            </div>
            
            <div className={`${pathname === '/menu' ? 'md:w-7/12 p-10' : 'md:w-10/12 p-10'} bg-gray-100 md:h-screen overflow-scroll" `}>
                <Outlet />
            </div>

            { pathname ==='/menu' && (
                <div className="md:w-3/12 p-10 bg-white">
                    pay
                </div>
            )}

        </div>
    )
}

export default Layout
