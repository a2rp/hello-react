import styled from "styled-components";

export const Shell = styled.main`
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 24px;
`;

export const Card = styled.section`
    width: min(680px, 92vw);
    background: linear-gradient(180deg, var(--panel), var(--panel-2));
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 28px;
    border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: var(--gap);
    margin-bottom: 18px;
`;

export const Title = styled.h1`
    font-size: clamp(20px, 2vw + 10px, 28px);
    margin: 0;
    letter-spacing: 0.2px;
`;

export const Sub = styled.p`
    margin: 8px 0 0 0;
    color: var(--muted);
    line-height: 1.5;
`;

export const BadgeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0 8px;
`;

export const Badge = styled.span`
    border-radius: 999px;
    padding: 6px 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    font-size: 12px;
    color: var(--muted);
`;

export const Hmr = styled.div`
    margin-top: 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(97, 218, 251, 0.08);
    border-left: 3px solid var(--brand);
`;

export const Actions = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    appearance: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 10px 14px;
    border-radius: 12px;
    background: #1f2230;
    color: var(--text);
    cursor: pointer;
    transition: transform 0.06s ease, box-shadow 0.12s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
    }
    &:active {
        transform: translateY(0);
    }
`;

export const Footer = styled.footer`
    margin-top: 18px;
    color: var(--muted);
    font-size: 12px;

    a {
        text-decoration: underline;
    }
`;
