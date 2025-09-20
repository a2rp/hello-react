import styled from "styled-components";

/** Minimal, elegant primitives.
 *  Pattern requested: const Wrapper = styled.div``; export const Styled = { Wrapper } */
const Wrapper = styled.div`
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 24px;
`;

const Card = styled.section`
    width: min(680px, 92vw);
    background: linear-gradient(
        180deg,
        var(--panel, #12121a),
        var(--panel-2, #171724)
    );
    border-radius: var(--radius, 16px);
    box-shadow: var(--shadow, 0 8px 24px rgba(0, 0, 0, 0.35));
    padding: 28px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    color: var(--text, #e6e7ea);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: var(--gap, 16px);
    margin-bottom: 18px;
`;

const Title = styled.h1`
    font-size: clamp(20px, 2vw + 10px, 28px);
    margin: 0;
    letter-spacing: 0.2px;
`;

const Sub = styled.p`
    margin: 8px 0 0 0;
    color: var(--muted, #a2a6b3);
    line-height: 1.5;
`;

const BadgeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0 8px;
`;

const Badge = styled.span`
    border-radius: 999px;
    padding: 6px 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    font-size: 12px;
    color: var(--muted, #a2a6b3);
`;

const Actions = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

const Button = styled.button`
    appearance: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 10px 14px;
    border-radius: 12px;
    background: #1f2230;
    color: var(--text, #e6e7ea);
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
    Header,
    Title,
    Sub,
    BadgeRow,
    Badge,
    Actions,
    Button,
    Footer,
};
