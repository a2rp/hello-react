import React, { useState } from "react";
import { Styled } from "./styled";

/**
 * HelloReact (Intro-01)
 * Purpose (for beginners):
 * - Proves that your React + Vite setup works.
 * - Shows how to style with styled-components (component-scoped CSS).
 * - Gives a polished baseline: tokens, a11y, clean layout.
 *
 * How to use:
 * 1) In src/App.jsx:  import HelloReact from "./helloReact";
 * 2) Then render:     <HelloReact />
 */
export default function HelloReact() {
    const [count, setCount] = useState(0);

    return (
        <Styled.Wrapper>
            <Styled.Card role="region" aria-labelledby="hello-title">
                <Styled.Header>
                    <div>
                        <Styled.Title id="hello-title">Hello React</Styled.Title>
                        <Styled.Sub>
                            Vite + styled-components baseline with design tokens and a11y.
                            This is your starting point for all micro-apps.
                        </Styled.Sub>
                    </div>
                </Styled.Header>

                <Styled.Badges aria-label="Tech stack">
                    <Styled.Badge>React 18</Styled.Badge>
                    <Styled.Badge>Vite</Styled.Badge>
                    <Styled.Badge>styled-components</Styled.Badge>
                    <Styled.Badge>Design Tokens</Styled.Badge>
                    <Styled.Badge>A11y-friendly</Styled.Badge>
                </Styled.Badges>

                <Styled.Actions>
                    <Styled.Button
                        onClick={() => setCount((c) => c + 1)}
                        aria-label="Increment demo counter"
                        title="Click to increment"
                    >
                        Click Me ({count})
                    </Styled.Button>

                    <Styled.Button onClick={() => setCount(0)} title="Reset counter">
                        Reset
                    </Styled.Button>

                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open React documentation"
                    >
                        <Styled.Button as="span" role="link">React Docs ↗</Styled.Button>
                    </a>
                </Styled.Actions>

                <Styled.Footer>
                    Code:&nbsp;
                    <a
                        href="https://github.com/a2rp/hello-react"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/a2rp/hello-react
                    </a>
                    &nbsp;• Live:&nbsp;
                    <a
                        href="https://a2rp.github.io/hello-react/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        a2rp.github.io/hello-react
                    </a>
                </Styled.Footer>
            </Styled.Card>
        </Styled.Wrapper>
    );
}
