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

    // useEffect(() => {
    //     fetch(`/routes.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.mainButton.text); // Temporarily
    //             setMainButtonText(data.mainButton.text);
    //         });
    // }, []);

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
        isOpen,
        toggleMobileMenuIcons: toggleMobileMenu ? "close" : "hamburger" // Derived state
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };