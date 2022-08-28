import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { Home } from './pages/Home';
import NewProduct from './pages/NewProduct';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='nuevo' element={<NewProduct/>}/>
        </Route>
        <Route path="/producto" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='nuevo' element={<NewProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
