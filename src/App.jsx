import { BrowserRouter, Routes, Route } from "react-router-dom"
import UnderConstruction from "./components/UnderConstruction"
import Dashboard from "./components/Dashboard";
import TakeOff from "./components/TakeOff.jsx";
import Contact from "./components/Contact.jsx";
import useFetch from "./components/useFetch.jsx";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import { Transition } from '@headlessui/react'

export default function App() {
  const context = useContext(ThemeContext);
  const [open, setOpen] = useState(false)
  const isUnderConstruction = true;


  const {get, loading} = useFetch(`/`);

  // useEffect(() => {
  //   get(`routes.json`)
  //   .then(data => context.setRoutes(data.menu))
  // }, [])

  if (isUnderConstruction) {
    return (
      <UnderConstruction />
    )
    
  }   

  return (
        <BrowserRouter>
         <SignUpForm />
          <Routes>
            <Route path="/"  element={<Dashboard />} />
            <Route path="/take-off"  element={<TakeOff />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
          {/* Portal should not be visible */}
          {/* testing */}
        </BrowserRouter>
  )
}