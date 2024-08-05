import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);
    const [mainButtonText, setMainButtonText] = useState(null);
    const [pageOrder, setPageOrder] = useState("");
    const [hideOrUnhideOrder, setHideOrUnhideOrder] = useState(null);
    const [hoverUnderlineColor, setHoverUnderlineColor] = useState(1);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    const [open, setOpen] = useState(false)
    const instagramUsername = 'codelooney';


    // useEffect(() => {
    //     fetch(`/routes.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.mainButton.text); // Temporarily
    //             setMainButtonText(data.mainButton.text);
    //         });
    // }, []);

      // Construct the Instagram app URI
  const instagramAppUrl = `instagram://user?username=${instagramUsername}`;
  // Fallback URL in case Instagram app is not installed
  const instagramWebUrl = `https://www.instagram.com/${instagramUsername}/`;

  const handleInstagramClick = (event) => {
    {/* its not redirecting when on desktop, 
    and when on mobile it opens IG, and popup permission page (cancel and open) */}
    event.preventDefault();
    window.open(instagramAppUrl).focus();
    setTimeout(() => {
      window.open(instagramWebUrl).focus();
    });
  };


    useEffect(() => {
        fetch(`route.json`)
            .then(res => res.json())
            .then(data => {
                setRouter(data.navigation);
                setPageOrder(data.navigation.order);
            });
    }, []);

    const handleNavLinkHover = (id) => {
        setHoverUnderlineColor(id);
    };

    const handleToggleMobileMenu = () => {
        setToggleMobileMenu(prevState => !prevState);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleOptionChange = (e) => {
      setOption(e.target.value);
    };
  
    const handleClose = () => {
      // Logic to handle close (e.g., hide form, navigate away, etc.)
      console.log('Form closed');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted with:', { email, option });
    };

    const value = {
        router,
        setRouter,
        hover,
        setHover,
        mainButtonText,
        setMainButtonText,
        pageOrder,
        setPageOrder,
        hideOrUnhideOrder,
        setHideOrUnhideOrder,
        hoverUnderlineColor,
        setHoverUnderlineColor,
        handleNavLinkHover,
        handleToggleMobileMenu,
        toggleMobileMenu,
        open,
        isOpen,
        setOpen,
        setIsOpen,
        instagramAppUrl,
        instagramWebUrl,
        instagramUsername,
        handleInstagramClick,
        handleSubmit,
        toggleMobileMenuIcons: toggleMobileMenu ? "close" : "hamburger" // Derived state
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };