import { BrowserRouter, Routes, Route } from "react-router-dom"
import UnderConstruction from "./components/UnderConstruction"
import Portal from "./components/Portal"

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
        <Route path="/"  element={<Portal />} />
      </Routes>
      {/* Portal should not be visible */}
      {/* testing */}
    </BrowserRouter>
  )
}