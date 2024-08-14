import { BrowserRouter, Routes, Route } from "react-router-dom"
import UnderConstruction from "./components/UnderConstruction"
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact.jsx";
import useFetch from "./components/useFetch.jsx";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import StartHere from "./components/StartHere.jsx";
import Projects from "./components/Projects.jsx";
import OneToOneCoachingCall from "./components/OneToOneCoachingCall.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import PrivacyNotice from "./components/PrivacyNotice.jsx";

export default function App() {
  const context = useContext(ThemeContext);
  const [open, setOpen] = useState(false)
  const isUnderConstruction = false;


  const {get, loading} = useFetch(`/`);

  if (isUnderConstruction) {
    return (
      <UnderConstruction />
    )
    
  }   

  return (
        <BrowserRouter>
         <SignUpForm />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/start-here"  element={<StartHere />}></Route>
            <Route path="/one-to-one-coaching-call" element={<OneToOneCoachingCall />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/projects"  element={<Projects />}></Route>
            <Route path="/contact"  element={<Contact />}></Route>
            <Route path="/privacy-notice"  element={<PrivacyNotice />}></Route>
          </Routes>
          {/* Portal should not be visible */}
          {/* testing */}
        </BrowserRouter>
  )
}