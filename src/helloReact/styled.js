import styled from "styled-components";

/* Fallbacks ensure it looks great even if :root tokens aren't set yet */
const Wrapper = styled.div`
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 24px;
    background: radial-gradient(
        1200px 800px at 20% 10%,
        color-mix(in oklab, #0f0f16 75%, #000 25%),
        var(--bg, #0b0b0f) 60%
    );
    color: var(--text, #e6e7ea);
`;

const Card = styled.section`
    width: min(720px, 92vw);
    background: linear-gradient(
        180deg,
        var(--panel, #12121a) 0%,
        var(--panel-2, #171724) 100%
    );
    border-radius: var(--radius, 16px);
    box-shadow: var(--shadow, 0 8px 24px rgba(0, 0, 0, 0.35));
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 28px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap, 16px);
`;

const Header = styled.div`
    ${Row};
    justify-content: space-between;
    margin-bottom: 14px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: clamp(22px, 2.2vw + 12px, 32px);
    letter-spacing: 0.2px;
    font-weight: 700;
`;

const Sub = styled.p`
    margin: 6px 0 0;
    color: var(--muted, #a2a6b3);
    line-height: 1.55;
`;

const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0 6px;
`;

const Badge = styled.span`
    border-radius: 999px;
    padding: 6px 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--muted, #a2a6b3);
    font-size: 12px;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
`;

const Button = styled.button`
    appearance: none;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: #1f2230;
    color: var(--text, #e6e7ea);
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.06s ease, box-shadow 0.12s ease,
        background 0.2s ease;
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
        background: #232636;
    }
    &:active {
        transform: translateY(0);
    }
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px rgba(97, 218, 251, 0.45);
    }
`;

const Footer = styled.footer`
    margin-top: 18px;
    color: var(--muted, #a2a6b3);
    font-size: 12px;
    a {
        color: var(--brand, #61dafb);
        text-decoration: underline;
    }
`;

export const Styled = {
    Wrapper,
    Card,
    Row,
    Header,
    Title,
    Sub,
    Badges,
    Badge,
    Actions,
    Button,
    Footer,
};
