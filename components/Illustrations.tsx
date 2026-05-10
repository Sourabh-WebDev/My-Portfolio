'use client';

/**
 * SVG Illustration components used across the portfolio sections.
 * All illustrations use the site's primary (#50d4ff) and accent (#a78bfa) color palette.
 */

/* ─────────────────────────────────────────────────────────────
   Developer Illustration – used in Hero section
────────────────────────────────────────────────────────────── */
export function DeveloperIllustration() {
    return (
        <svg
            viewBox="0 0 520 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Developer at work illustration"
        >
            <defs>
                <radialGradient id="glow-hero" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#50d4ff" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="screen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="desk-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Ambient glow backdrop */}
            <ellipse cx="260" cy="240" rx="220" ry="200" fill="url(#glow-hero)" />

            {/* Floating orbit ring */}
            <ellipse cx="260" cy="245" rx="195" ry="60" stroke="#50d4ff" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="6 4" />
            <ellipse cx="260" cy="245" rx="195" ry="60" stroke="#a78bfa" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3 8" transform="rotate(30 260 245)" />

            {/* ── Desk ── */}
            <rect x="60" y="320" width="400" height="12" rx="4" fill="url(#desk-grad)" />
            <rect x="90" y="332" width="12" height="60" rx="3" fill="#1e293b" />
            <rect x="418" y="332" width="12" height="60" rx="3" fill="#1e293b" />

            {/* ── Monitor body ── */}
            <rect x="100" y="155" width="320" height="165" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="2" />
            {/* monitor neck */}
            <rect x="242" y="320" width="36" height="10" rx="2" fill="#1e293b" />
            <rect x="210" y="328" width="100" height="8" rx="3" fill="#1e293b" />

            {/* ── Screen ── */}
            <rect x="112" y="165" width="296" height="145" rx="6" fill="url(#screen-grad)" />

            {/* Editor chrome – title bar */}
            <rect x="112" y="165" width="296" height="22" rx="6" fill="#1e293b" />
            <circle cx="128" cy="176" r="4" fill="#ef4444" />
            <circle cx="142" cy="176" r="4" fill="#f59e0b" />
            <circle cx="156" cy="176" r="4" fill="#22c55e" />
            <rect x="175" y="170" width="120" height="12" rx="3" fill="#334155" />

            {/* Code lines */}
            <rect x="122" y="197" width="40" height="5" rx="2" fill="#a78bfa" />
            <rect x="168" y="197" width="70" height="5" rx="2" fill="#50d4ff" />
            <rect x="244" y="197" width="30" height="5" rx="2" fill="#f472b6" />
            <rect x="122" y="210" width="20" height="5" rx="2" fill="#94a3b8" />
            <rect x="148" y="210" width="55" height="5" rx="2" fill="#50d4ff" />
            <rect x="209" y="210" width="40" height="5" rx="2" fill="#a78bfa" />
            <rect x="255" y="210" width="65" height="5" rx="2" fill="#94a3b8" />
            <rect x="130" y="223" width="80" height="5" rx="2" fill="#f472b6" />
            <rect x="216" y="223" width="45" height="5" rx="2" fill="#50d4ff" />
            <rect x="267" y="223" width="55" height="5" rx="2" fill="#94a3b8" />
            <rect x="122" y="236" width="35" height="5" rx="2" fill="#a78bfa" />
            <rect x="163" y="236" width="90" height="5" rx="2" fill="#50d4ff" />
            <rect x="259" y="236" width="50" height="5" rx="2" fill="#f472b6" />
            <rect x="130" y="249" width="60" height="5" rx="2" fill="#94a3b8" />
            <rect x="196" y="249" width="75" height="5" rx="2" fill="#a78bfa" />
            <rect x="122" y="262" width="45" height="5" rx="2" fill="#50d4ff" />
            <rect x="173" y="262" width="100" height="5" rx="2" fill="#94a3b8" />
            <rect x="279" y="262" width="35" height="5" rx="2" fill="#f472b6" />
            {/* cursor blink rect */}
            <rect x="320" y="262" width="3" height="10" rx="1" fill="#50d4ff" opacity="0.9" />

            {/* ── Laptop (open, below left) ── */}
            <rect x="62" y="295" width="110" height="72" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect x="68" y="300" width="98" height="62" rx="3" fill="#0f1a2e" />
            {/* small code lines on laptop */}
            <rect x="74" y="308" width="32" height="3" rx="1" fill="#a78bfa" opacity="0.8" />
            <rect x="112" y="308" width="44" height="3" rx="1" fill="#50d4ff" opacity="0.8" />
            <rect x="80" y="316" width="22" height="3" rx="1" fill="#f472b6" opacity="0.7" />
            <rect x="108" y="316" width="50" height="3" rx="1" fill="#94a3b8" opacity="0.7" />
            <rect x="74" y="324" width="55" height="3" rx="1" fill="#50d4ff" opacity="0.8" />
            <rect x="80" y="332" width="42" height="3" rx="1" fill="#a78bfa" opacity="0.7" />
            <rect x="74" y="340" width="30" height="3" rx="1" fill="#94a3b8" opacity="0.7" />
            <rect x="110" y="340" width="45" height="3" rx="1" fill="#f472b6" opacity="0.7" />

            {/* ── Floating badge: React ── */}
            <g filter="url(#glow-filter)">
                <rect x="398" y="140" width="88" height="34" rx="8" fill="#0f172a" stroke="#50d4ff" strokeWidth="1.5" strokeOpacity="0.7" />
                <circle cx="416" cy="157" r="8" fill="none" stroke="#50d4ff" strokeWidth="2" />
                <circle cx="416" cy="157" r="2.5" fill="#50d4ff" />
                <text x="430" y="162" fontSize="11" fill="#50d4ff" fontFamily="monospace">React</text>
            </g>

            {/* ── Floating badge: TS ── */}
            <g filter="url(#glow-filter)">
                <rect x="22" y="180" width="72" height="34" rx="8" fill="#0f172a" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.7" />
                <rect x="32" y="147" width="0" height="0" />
                <text x="32" y="201" fontSize="10" fill="#a78bfa" fontFamily="monospace">{'{ TS }'}</text>
            </g>

            {/* ── Floating badge: Next.js ── */}
            <g filter="url(#glow-filter)">
                <rect x="390" y="240" width="96" height="34" rx="8" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.6" />
                <text x="406" y="261" fontSize="11" fill="#e2e8f0" fontFamily="monospace">Next.js</text>
            </g>

            {/* ── Floating badge: Node ── */}
            <g filter="url(#glow-filter)">
                <rect x="22" y="260" width="80" height="34" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.6" />
                <text x="36" y="281" fontSize="11" fill="#22c55e" fontFamily="monospace">Node</text>
            </g>

            {/* ── Stars / sparkles ── */}
            <circle cx="470" cy="130" r="2.5" fill="#50d4ff" opacity="0.7" />
            <circle cx="460" cy="118" r="1.5" fill="#a78bfa" opacity="0.6" />
            <circle cx="480" cy="120" r="1.5" fill="#50d4ff" opacity="0.5" />
            <circle cx="45" cy="150" r="2" fill="#a78bfa" opacity="0.6" />
            <circle cx="35" cy="140" r="1.5" fill="#50d4ff" opacity="0.5" />
            <circle cx="55" cy="135" r="1" fill="#f472b6" opacity="0.6" />
            <circle cx="470" cy="310" r="2" fill="#f472b6" opacity="0.6" />
            <circle cx="460" cy="298" r="1.5" fill="#a78bfa" opacity="0.5" />

            {/* progress arc (decorative) */}
            <circle cx="260" cy="420" r="24" stroke="#50d4ff" strokeWidth="2" strokeOpacity="0.3" fill="none" strokeDasharray="120 32" />
            <circle cx="260" cy="420" r="16" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeDasharray="80 21" />
        </svg>
    );
}

/* ─────────────────────────────────────────────────────────────
   Avatar Illustration – used in About section
────────────────────────────────────────────────────────────── */
export function AvatarIllustration() {
    return (
        <svg
            viewBox="0 0 400 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Developer avatar illustration"
        >
            <defs>
                <radialGradient id="avatar-glow" cx="50%" cy="48%" r="48%">
                    <stop offset="0%" stopColor="#50d4ff" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf87" />
                    <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <clipPath id="avatar-circle">
                    <circle cx="200" cy="210" r="145" />
                </clipPath>
                <filter id="av-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Glow backdrop */}
            <ellipse cx="200" cy="220" rx="180" ry="180" fill="url(#avatar-glow)" />

            {/* Rotating dashed rings */}
            <circle cx="200" cy="210" r="155" stroke="#50d4ff" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="8 6" />
            <circle cx="200" cy="210" r="168" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.14" strokeDasharray="4 10" />

            {/* Main circle frame with gradient border */}
            <circle cx="200" cy="210" r="145" fill="#0f172a" stroke="url(#screen-grad)" strokeWidth="0" />
            <circle cx="200" cy="210" r="145" fill="none" stroke="#50d4ff" strokeWidth="2.5" strokeOpacity="0.5" />
            <circle cx="200" cy="210" r="141" fill="none" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.25" />

            {/* ── Avatar figure (clipPath to circle) ── */}
            <g clipPath="url(#avatar-circle)">
                {/* background gradient fill */}
                <rect x="55" y="65" width="290" height="290" fill="#0f172a" />
                <rect x="55" y="65" width="290" height="290" fill="url(#avatar-glow)" />

                {/* Hexagonal grid decoration */}
                {[0, 1, 2].map((row) =>
                    [0, 1, 2, 3].map((col) => (
                        <polygon
                            key={`hex-${row}-${col}`}
                            points="0,-12 10.4,-6 10.4,6 0,12 -10.4,6 -10.4,-6"
                            fill="none"
                            stroke="#50d4ff"
                            strokeWidth="0.6"
                            strokeOpacity="0.12"
                            transform={`translate(${80 + col * 62 + (row % 2) * 31}, ${130 + row * 35})`}
                        />
                    ))
                )}

                {/* Shirt / body */}
                <rect x="120" y="300" width="160" height="110" rx="10" fill="#1e3a5f" />
                {/* collar V */}
                <polygon points="200,300 175,320 200,345 225,320" fill="#0f172a" opacity="0.6" />

                {/* Neck */}
                <rect x="180" y="270" width="40" height="40" rx="4" fill="url(#skin-grad)" />

                {/* Head */}
                <ellipse cx="200" cy="230" rx="58" ry="62" fill="url(#skin-grad)" />

                {/* Hair */}
                <ellipse cx="200" cy="178" rx="58" ry="28" fill="#1a1a2e" />
                <ellipse cx="148" cy="205" rx="14" ry="30" fill="#1a1a2e" />
                <ellipse cx="252" cy="205" rx="14" ry="30" fill="#1a1a2e" />

                {/* Eyes */}
                <ellipse cx="180" cy="228" rx="8" ry="9" fill="#1a1a2e" />
                <ellipse cx="220" cy="228" rx="8" ry="9" fill="#1a1a2e" />
                <ellipse cx="180" cy="226" rx="4" ry="5" fill="#50d4ff" />
                <ellipse cx="220" cy="226" rx="4" ry="5" fill="#50d4ff" />
                <circle cx="182" cy="224" r="1.5" fill="white" />
                <circle cx="222" cy="224" r="1.5" fill="white" />

                {/* Eyebrows */}
                <path d="M170 217 Q180 212 190 217" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M210 217 Q220 212 230 217" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                {/* Nose */}
                <path d="M197 235 Q200 248 203 235" stroke="#c2956c" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Smile */}
                <path d="M185 255 Q200 268 215 255" stroke="#c2956c" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>

            {/* ── Floating stat badge: Years ── */}
            <g filter="url(#av-glow)">
                <rect x="18" y="155" width="88" height="52" rx="10" fill="#0f172a" stroke="#50d4ff" strokeWidth="1.5" strokeOpacity="0.7" />
                <text x="62" y="177" fontSize="20" fontWeight="bold" fill="#50d4ff" textAnchor="middle" fontFamily="sans-serif">4+</text>
                <text x="62" y="196" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="sans-serif">Years Exp.</text>
            </g>

            {/* ── Floating stat badge: Projects ── */}
            <g filter="url(#av-glow)">
                <rect x="294" y="145" width="92" height="52" rx="10" fill="#0f172a" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.7" />
                <text x="340" y="167" fontSize="20" fontWeight="bold" fill="#a78bfa" textAnchor="middle" fontFamily="sans-serif">20+</text>
                <text x="340" y="186" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="sans-serif">Projects</text>
            </g>

            {/* ── Floating badge: code brackets ── */}
            <g filter="url(#av-glow)">
                <rect x="26" y="285" width="72" height="36" rx="8" fill="#0f172a" stroke="#f472b6" strokeWidth="1.2" strokeOpacity="0.6" />
                <text x="62" y="308" fontSize="14" fill="#f472b6" textAnchor="middle" fontFamily="monospace">{'{ }'}</text>
            </g>

            {/* ── Stars ── */}
            <circle cx="370" cy="95" r="2.5" fill="#50d4ff" opacity="0.7" />
            <circle cx="358" cy="82" r="1.5" fill="#a78bfa" opacity="0.6" />
            <circle cx="380" cy="82" r="1.5" fill="#f472b6" opacity="0.5" />
            <circle cx="28" cy="100" r="2" fill="#a78bfa" opacity="0.6" />
            <circle cx="18" cy="90" r="1.5" fill="#50d4ff" opacity="0.5" />
            <circle cx="370" cy="340" r="2" fill="#50d4ff" opacity="0.5" />
            <circle cx="30" cy="370" r="2" fill="#a78bfa" opacity="0.5" />
        </svg>
    );
}

/* ─────────────────────────────────────────────────────────────
   Browser Mockup – used in Projects section cards
────────────────────────────────────────────────────────────── */
interface BrowserMockupProps {
    accentColor?: string;
    secondaryColor?: string;
    label?: string;
    isNda?: boolean;
}

export function BrowserMockup({
    accentColor = '#50d4ff',
    secondaryColor = '#a78bfa',
    label = 'Live Project',
    isNda = false,
}: BrowserMockupProps) {
    return (
        <svg
            viewBox="0 0 320 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label={`${label} browser mockup`}
        >
            <defs>
                <linearGradient id={`screen-${accentColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id={`line-grad-${accentColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Browser frame */}
            <rect x="2" y="2" width="316" height="176" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

            {/* Title bar */}
            <rect x="2" y="2" width="316" height="32" rx="10" fill="#1e293b" />
            <rect x="2" y="22" width="316" height="12" fill="#1e293b" />

            {/* Traffic lights */}
            <circle cx="20" cy="18" r="5" fill="#ef4444" />
            <circle cx="36" cy="18" r="5" fill="#f59e0b" />
            <circle cx="52" cy="18" r="5" fill="#22c55e" />

            {/* URL bar */}
            <rect x="70" y="10" width="180" height="16" rx="4" fill="#0f172a" />
            <circle cx="84" cy="18" r="4" fill="none" stroke="#334155" strokeWidth="1.2" />
            <text x="96" y="22" fontSize="8" fill="#475569" fontFamily="monospace">
                {isNda ? 'confidential • • • • • •' : `sourabh.dev/${label.toLowerCase().replace(/\s/g, '-')}`}
            </text>

            {/* Screen content area */}
            <rect x="2" y="34" width="316" height="144" fill={`url(#screen-${accentColor.replace('#', '')})`} />

            {isNda ? (
                <>
                    {/* NDA lock icon */}
                    <rect x="136" y="68" width="48" height="38" rx="6" fill="#1e293b" />
                    <path d="M148 72 Q160 62 172 72 V68 Q160 56 148 68 Z" fill="#f59e0b" />
                    <circle cx="160" cy="82" r="5" fill="#f59e0b" />
                    <line x1="160" y1="82" x2="160" y2="90" stroke="#0f172a" strokeWidth="2" />
                    <text x="160" y="120" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="sans-serif">Under NDA</text>
                    <text x="160" y="132" fontSize="8" fill="#475569" textAnchor="middle" fontFamily="sans-serif">Details restricted</text>
                </>
            ) : (
                <>
                    {/* Simulated app UI content */}
                    {/* Nav bar simulation */}
                    <rect x="2" y="34" width="316" height="20" fill="#0f1a2e" />
                    <rect x="14" y="40" width="40" height="8" rx="2" fill={accentColor} opacity="0.8" />
                    <rect x="220" y="40" width="28" height="8" rx="3" fill={accentColor} opacity="0.5" />
                    <rect x="254" y="40" width="28" height="8" rx="3" fill={secondaryColor} opacity="0.4" />
                    <rect x="288" y="40" width="22" height="8" rx="3" fill={accentColor} opacity="0.3" />

                    {/* Hero text block */}
                    <rect x="14" y="64" width="120" height="10" rx="3" fill={accentColor} opacity="0.5" />
                    <rect x="14" y="80" width="90" height="7" rx="2" fill="#334155" />
                    <rect x="14" y="92" width="100" height="7" rx="2" fill="#334155" />
                    <rect x="14" y="104" width="80" height="7" rx="2" fill="#334155" />
                    <rect x="14" y="118" width="60" height="14" rx="4" fill={accentColor} opacity="0.8" />
                    <rect x="82" y="118" width="52" height="14" rx="4" fill="none" stroke={secondaryColor} strokeWidth="1.2" strokeOpacity="0.7" />

                    {/* Hero image block (right) */}
                    <rect x="170" y="58" width="136" height="100" rx="8" fill={`url(#line-grad-${accentColor.replace('#', '')})`} opacity="0.35" />
                    {/* Simulated avatar blob */}
                    <ellipse cx="238" cy="108" rx="32" ry="36" fill={accentColor} opacity="0.12" />
                    <ellipse cx="238" cy="92" rx="18" ry="18" fill={accentColor} opacity="0.18" />

                    {/* card row */}
                    <rect x="14" y="140" width="56" height="30" rx="5" fill="#1e293b" />
                    <rect x="76" y="140" width="56" height="30" rx="5" fill="#1e293b" />
                    <rect x="138" y="140" width="56" height="30" rx="5" fill="#1e293b" />
                    <rect x="200" y="140" width="56" height="30" rx="5" fill="#1e293b" />
                    <rect x="20" y="147" width="30" height="4" rx="1" fill={accentColor} opacity="0.5" />
                    <rect x="82" y="147" width="30" height="4" rx="1" fill={secondaryColor} opacity="0.5" />
                    <rect x="144" y="147" width="30" height="4" rx="1" fill="#f472b6" opacity="0.5" />
                    <rect x="206" y="147" width="30" height="4" rx="1" fill="#22c55e" opacity="0.5" />
                    <rect x="20" y="156" width="22" height="4" rx="1" fill="#475569" />
                    <rect x="82" y="156" width="22" height="4" rx="1" fill="#475569" />
                    <rect x="144" y="156" width="22" height="4" rx="1" fill="#475569" />
                    <rect x="206" y="156" width="22" height="4" rx="1" fill="#475569" />
                </>
            )}

            {/* Bottom glow accent */}
            <rect x="2" y="170" width="316" height="8" rx="0 0 10 10" fill={accentColor} opacity="0.06" />
        </svg>
    );
}

/* ─────────────────────────────────────────────────────────────
   Tech Icon – circle badge with letter/abbreviation
────────────────────────────────────────────────────────────── */
const techColors: Record<string, { bg: string; text: string; label: string }> = {
    'React.js': { bg: '#0d2033', text: '#50d4ff', label: 'Re' },
    'Next.js': { bg: '#111827', text: '#e2e8f0', label: 'N' },
    TypeScript: { bg: '#0c1a35', text: '#3b82f6', label: 'TS' },
    'Vite.js': { bg: '#1e0a2e', text: '#a78bfa', label: 'Vi' },
    Redux: { bg: '#1a0a2e', text: '#8b5cf6', label: 'Rx' },
    'Tailwind CSS': { bg: '#0a1f2e', text: '#06b6d4', label: 'Tw' },
    'Material UI': { bg: '#0a1a3a', text: '#2563eb', label: 'MU' },
    'Ant Design': { bg: '#0a1a3a', text: '#3b82f6', label: 'Ad' },
    'Kendo React': { bg: '#0a2a1a', text: '#22c55e', label: 'Kr' },
    Bootstrap: { bg: '#1f0a2e', text: '#7c3aed', label: 'Bs' },
    'RESTful APIs': { bg: '#1a1a0a', text: '#f59e0b', label: 'Api' },
    Axios: { bg: '#0a1f1a', text: '#10b981', label: 'Ax' },
    Fetch: { bg: '#1a0a1a', text: '#f472b6', label: 'Ft' },
    'React Query': { bg: '#0d2033', text: '#ef4444', label: 'RQ' },
    'Context API': { bg: '#0d2033', text: '#50d4ff', label: 'Ctx' },
    'Node.js': { bg: '#0a1f0a', text: '#22c55e', label: 'No' },
    Git: { bg: '#2a0a0a', text: '#ef4444', label: 'Git' },
    'Figma / Adobe XD': { bg: '#1a0a1a', text: '#f472b6', label: 'Fg' },
    'Responsive Design': { bg: '#0a1a2a', text: '#38bdf8', label: 'RD' },
};

interface TechIconProps {
    skill: string;
    size?: number;
}

export function TechIcon({ skill, size = 48 }: TechIconProps) {
    const config = techColors[skill] ?? { bg: '#0f172a', text: '#94a3b8', label: skill.slice(0, 2) };
    const fontSize = config.label.length > 2 ? size * 0.24 : size * 0.28;

    return (
        <svg
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label={skill}
        >
            <rect width={size} height={size} rx={size * 0.22} fill={config.bg} />
            <rect
                x="1"
                y="1"
                width={size - 2}
                height={size - 2}
                rx={size * 0.22 - 1}
                fill="none"
                stroke={config.text}
                strokeWidth="1.2"
                strokeOpacity="0.4"
            />
            <text
                x={size / 2}
                y={size / 2 + fontSize * 0.38}
                fontSize={fontSize}
                fontWeight="700"
                fill={config.text}
                textAnchor="middle"
                fontFamily="monospace"
            >
                {config.label}
            </text>
        </svg>
    );
}
