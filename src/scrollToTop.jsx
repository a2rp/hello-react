import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 120);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <TopButton
            type="button"
            data-visible={visible}
            disabled={!visible}
            tabIndex={visible ? 0 : -1}
            aria-label="Scroll to top"
            onClick={() => {
                const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
            }}
        >
            <FiArrowUp aria-hidden="true" />
        </TopButton>
    );
}

const TopButton = styled.button`
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 15;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    color: #fff;
    background: #1f2230;
    border: 1px solid rgba(97,218,251,.55);
    border-radius: 999px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity .18s ease, border-color .18s ease, box-shadow .18s ease;
    &[data-visible="true"] { opacity: 1; pointer-events: auto; }
    &:hover, &:focus-visible { border-color: var(--brand); box-shadow: 0 0 0 4px rgba(97,218,251,.12); outline: none; }
`;
