import { BrowserRouter, Routes, Route } from "react-router-dom"
import UnderConstruction from "./components/UnderConstruction"
import Dashboard from "./components/Dashboard"

export default function App() {
  const isUnderConstruction = false;

  if (isUnderConstruction) {
    return (
      <UnderConstruction />
    )
  }   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Dashboard />} />
      </Routes>
      {/* Portal should not be visible */}
      {/* testing */}
    </BrowserRouter>
  )
}