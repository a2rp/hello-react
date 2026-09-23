import { useState } from "react";
import { FiBookOpen, FiGithub, FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <HeaderWrap>
            <HeaderInner>
                <Brand href="#hello-react" onClick={close}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                    <span><small>REACT STARTER</small><strong>Hello React</strong></span>
                </Brand>
                <Nav $open={open}>
                    <NavLink href="#hello-react" onClick={close}>Demo</NavLink>
                    <NavLink href="https://react.dev/" target="_blank" rel="noopener noreferrer" onClick={close}>
                        <FiBookOpen aria-hidden="true" /> React docs
                    </NavLink>
                    <NavLink href="https://github.com/a2rp/hello-react" target="_blank" rel="noopener noreferrer" onClick={close}>
                        <FiGithub aria-hidden="true" /> GitHub
                    </NavLink>
                </Nav>
                <MenuButton type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
                    {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </MenuButton>
            </HeaderInner>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.header`
    position: fixed;
    inset: 0 0 auto;
    z-index: 20;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(11, 11, 15, 0.9);
    backdrop-filter: blur(14px);
`;

const HeaderInner = styled.div`
    width: min(960px, calc(100% - 36px));
    min-height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
`;

const Brand = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    text-decoration: none;

    img { width: 36px; height: 36px; border-radius: 9px; border: 1px solid rgba(255,255,255,.14); }
    span { display: grid; gap: 2px; }
    small { color: var(--brand); font-size: 9px; letter-spacing: .14em; font-weight: 700; }
    strong { font-size: 16px; }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    @media (max-width: 620px) {
        position: absolute;
        inset: 70px 18px auto;
        display: ${({ $open }) => ($open ? "grid" : "none")};
        padding: 10px;
        border: 1px solid rgba(255,255,255,.12);
        border-radius: 14px;
        background: #151722;
        box-shadow: 0 18px 40px rgba(0,0,0,.35);
    }
`;

const NavLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    border: 1px solid transparent;
    border-radius: 9px;
    color: var(--muted);
    text-decoration: none;
    transition: color .18s ease, border-color .18s ease, box-shadow .18s ease;
    &:hover, &:focus-visible {
        color: #fff;
        border-color: rgba(97,218,251,.55);
        box-shadow: 0 0 0 3px rgba(97,218,251,.1);
        outline: none;
    }
    @media (max-width: 620px) { width: 100%; }
`;

const MenuButton = styled.button`
    display: none;
    width: 38px;
    height: 38px;
    place-items: center;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 9px;
    cursor: pointer;
    &:hover, &:focus-visible { border-color: rgba(97,218,251,.55); box-shadow: 0 0 0 3px rgba(97,218,251,.1); outline: none; }
    @media (max-width: 620px) { display: grid; }
`;
