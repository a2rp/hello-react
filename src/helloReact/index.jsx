import React, { useState } from "react";
import { Styled } from "./styled";

/** Hello React — Micro-App
 *  What this proves (beginner-friendly):
 *  - React component renders clean UI with styled-components.
 *  - Minimal state: a demo counter to verify reactivity.
 *  - A11y: landmark/labels, focusable controls, visible semantics.
 *  - No globals or complex HMR tricks—just a polished baseline.
 *
 *  How to wire:
 *  - Import in src/App.jsx:  import HelloReact from "./helloReact";
 *  - Render: <HelloReact />
 */
const TECH = ["React 18", "Vite", "styled-components"];

export default function HelloReact() {
    const [clicks, setClicks] = useState(0);

    return (
        <Styled.Wrapper>
            <Styled.Card role="region" aria-labelledby="hello-title">
                <Styled.Header>
                    <div>
                        <Styled.Title id="hello-title">Hello React • Micro-App</Styled.Title>
                        <Styled.Sub>
                            Vite + styled-components baseline with design tokens and a11y.
                            Keep this tiny, readable, and production-polished.
                        </Styled.Sub>
                    </div>
                </Styled.Header>

                <Styled.BadgeRow aria-label="Tech badges">
                    {TECH.map((t) => (
                        <Styled.Badge key={t}>{t}</Styled.Badge>
                    ))}
                    <Styled.Badge>Design Tokens</Styled.Badge>
                    <Styled.Badge>A11y-Ready</Styled.Badge>
                </Styled.BadgeRow>

                <Styled.Actions>
                    <Styled.Button
                        onClick={() => setClicks((c) => c + 1)}
                        aria-label="Increment demo counter"
                    >
                        Click Me ({clicks})
                    </Styled.Button>
                    <Styled.Button onClick={() => setClicks(0)}>Reset</Styled.Button>
                    <a
                        href="https://github.com/a2rp/hello-react"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open GitHub repository in new tab"
                    >
                        <Styled.Button as="span" role="link">
                            View Code on GitHub ↗
                        </Styled.Button>
                    </a>
                </Styled.Actions>

                <Styled.Footer>
                    Built with ♥ by{" "}
                    <a href="https://github.com/a2rp" target="_blank" rel="noreferrer">
                        @a2rp
                    </a>
                    . This is the baseline template for future micro-apps.
                </Styled.Footer>
            </Styled.Card>
        </Styled.Wrapper>
    );
}
