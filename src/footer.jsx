import { createElement } from "react";
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FiCoffee, FiHeart, FiMail, FiMessageCircle, FiUser } from "react-icons/fi";
import styled from "styled-components";

const links = [
    ["Portfolio", "https://www.ashishranjan.net", FiUser],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiMessageCircle],
];

export default function Footer() {
    return (
        <FooterWrap>
            <FooterTop>
                <Brand><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />Hello React starter</Brand>
                <FooterLinks aria-label="Developer and support links">
                    {links.map(([label, href, Icon]) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                            {createElement(Icon, { "aria-hidden": true })}
                        </a>
                    ))}
                </FooterLinks>
            </FooterTop>
            <Copyright>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></Copyright>
        </FooterWrap>
    );
}

const FooterWrap = styled.footer`
    width: min(960px, calc(100% - 36px));
    margin: 0 auto 2rem;
    padding: 1.4rem 0 0;
    border-top: 1px solid rgba(255,255,255,.1);
    color: var(--muted);
`;

const FooterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Brand = styled.strong`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #fff;
    img { width: 30px; height: 30px; border-radius: 7px; border: 1px solid rgba(255,255,255,.14); }
`;

const FooterLinks = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    a {
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        color: var(--muted);
        border: 1px solid rgba(255,255,255,.12);
        border-radius: 8px;
        transition: color .18s ease, border-color .18s ease, box-shadow .18s ease;
    }
    a:hover, a:focus-visible {
        color: #fff;
        border-color: rgba(97,218,251,.55);
        box-shadow: 0 0 0 3px rgba(97,218,251,.1);
        outline: none;
    }
`;

const Copyright = styled.small`
    display: block;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,.07);
    a { color: #fff; }
`;
