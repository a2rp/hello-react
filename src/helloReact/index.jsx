import React, { useMemo, useState } from 'react'
import * as UI from './styled'

// Visual HMR counter: increments every time this module is hot-replaced (save to see it bump)
window.__HELLO_HMR__ = (window.__HELLO_HMR__ || 0) + 1
const HMR_COUNT = window.__HELLO_HMR__

// Tiny inline React logo (no external asset dependency)
const ReactMark = () => (
    <svg
        aria-hidden="true"
        width="40" height="40" viewBox="0 0 128 128"
        style={{ filter: 'drop-shadow(0 6px 16px rgba(97,218,251,0.35))' }}
    >
        <circle cx="64" cy="64" r="8" fill="#61dafb" />
        <g fill="none" stroke="#61dafb" strokeWidth="6">
            <ellipse cx="64" cy="64" rx="50" ry="18" />
            <ellipse cx="64" cy="64" rx="50" ry="18" transform="rotate(60 64 64)" />
            <ellipse cx="64" cy="64" rx="50" ry="18" transform="rotate(120 64 64)" />
        </g>
    </svg>
)

export default function HelloReact() {
    const [clicks, setClicks] = useState(0)

    // Recompute when HMR swaps this module (dependency is the HMR counter)
    const sessionStamp = useMemo(() => {
        const d = new Date()
        return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
    }, HMR_COUNT)

    return (
        <UI.Shell>
            <UI.Card role="region" aria-labelledby="hello-title">
                <UI.Header>
                    <ReactMark />
                    <div>
                        <UI.Title id="hello-title">Hello React • Micro-App</UI.Title>
                        <UI.Sub>
                            Baseline Vite + styled-components with tokens, a11y, and visual HMR proof.
                        </UI.Sub>
                    </div>
                </UI.Header>

                <UI.BadgeRow aria-label="Tech badges">
                    {['React 18', 'Vite', 'styled-components', 'Design Tokens', 'GH Pages'].map(x => (
                        <UI.Badge key={x}>{x}</UI.Badge>
                    ))}
                </UI.BadgeRow>

                <UI.Hmr aria-live="polite">
                    <strong>🔥 HMR:</strong>&nbsp;Hot Reload Count <strong>{HMR_COUNT}</strong>
                    &nbsp;•&nbsp;Session <strong>{sessionStamp}</strong>
                </UI.Hmr>

                <UI.Actions>
                    <UI.Button onClick={() => setClicks(c => c + 1)} aria-label="Increment demo counter">
                        Click Me ({clicks})
                    </UI.Button>
                    <UI.Button onClick={() => setClicks(0)}>Reset</UI.Button>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        <UI.Button as="span" role="link" aria-label="Open React documentation">
                            React Docs ↗
                        </UI.Button>
                    </a>
                </UI.Actions>

                <UI.Footer>
                    Built with ♥ by <a href="https://github.com/a2rp" target="_blank" rel="noreferrer">@a2rp</a>.&nbsp;
                    This is the foundation for all upcoming micro-apps.
                </UI.Footer>
            </UI.Card>
        </UI.Shell>
    )
}

// Opt-in HMR handling (Vite Fast Refresh preserves local state automatically)
if (import.meta.hot) import.meta.hot.accept()
