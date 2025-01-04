import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import NotFound from "./404"
import MainLayout from "./layout/MainLayout"
import Cart from "./pages/cart/cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
