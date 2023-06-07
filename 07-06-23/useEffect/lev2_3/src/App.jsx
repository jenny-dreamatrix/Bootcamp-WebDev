import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import CarList from "./pages/CarList"
import CarDetail from "./pages/CarDetail"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CarList/>}/>
      <Route path='/:id' element={<CarDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
