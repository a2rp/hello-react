import { createElement } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FiCode, FiFacebook, FiHeart, FiMail, FiUser } from "react-icons/fi";
import styled from "styled-components";

const links = [["Portfolio", "https://www.ashishranjan.net", FiUser], ["GitHub", "https://github.com/a2rp", FaGithub], ["CodePen", "https://codepen.io/ash1198", FiCode], ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin], ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook], ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube], ["Email", "mailto:ash.ranjan09@gmail.com", FiMail]];
const support = [["Support", "https://a2rp-donation-page.netlify.app/"], ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp"], ["Patreon", "https://patreon.com/a2rp"]];

export default function Footer() {
    return <FooterWrap><FooterLinks>{links.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{createElement(Icon)}{label}</a>)}</FooterLinks><FooterLinks>{support.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer"><FiHeart />{label}</a>)}</FooterLinks><small>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></small></FooterWrap>;
}

const FooterWrap = styled.footer`width: min(720px, 92vw); margin: 0 auto 2rem; padding: 1.4rem 0; border-top: 1px solid rgba(255,255,255,.1); color: var(--muted);`;
const FooterLinks = styled.nav`display: flex; flex-wrap: wrap; gap: .6rem 1rem; margin-bottom: .8rem; a { display: inline-flex; align-items: center; gap: .35rem; color: inherit; text-decoration: none; } a:hover { color: var(--brand); }`;
