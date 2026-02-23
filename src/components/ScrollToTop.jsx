import { useState, useEffect } from "react";
import btnScrollToTop from "../assets/img/bouton_scroll.webp";
import "../styles/style.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`btnscrolltotop ${isVisible ? "visible" : "hidden"}`}
        >
            <img src={btnScrollToTop} alt="Scroll to top" className="scrollicon" />
        </button>

    );
};

export default ScrollToTop;
