import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import { AdminGeneral } from "./components/Admin/AdminGeneral"
import { UserGeneral } from "./components/Users/UserGeneral"
import Detailedorder from "./components/Users/DetailedOrder"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminGeneral />} />
        <Route path="/lobby" element={<UserGeneral />} />
        <Route path="/order" element={<Detailedorder />} />
      </Routes>
    </BrowserRouter>
  )
}