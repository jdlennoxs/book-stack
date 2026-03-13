export const getPersonOutlineSvg = () => {
    // A simple, stylized architectural outline of a person (approx 1.8 units tall in proportion)
    const svgStr = [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 100" width="400" height="1000">',
        '  <g stroke="white" stroke-width="1.5" fill="rgba(255, 255, 255, 0.1)" stroke-linejoin="round" stroke-linecap="round">',
        '    <!-- Head -->',
        '    <ellipse cx="20" cy="12" rx="6" ry="8" />',
        '    <!-- Neck -->',
        '    <path d="M 18 20 L 18 22 M 22 20 L 22 22" />',
        '    <!-- Shoulders and Torso -->',
        '    <path d="M 10 26 C 10 22, 30 22, 30 26 L 26 50 C 26 55, 14 55, 14 50 Z" />',
        '    <!-- Left Arm (relaxing down) -->',
        '    <path d="M 10 26 L 6 45 L 8 60 C 8 62, 10 62, 11 60 L 12 50 L 14 28" fill="none" />',
        '    <!-- Right Arm (relaxing down) -->',
        '    <path d="M 30 26 L 34 45 L 32 60 C 32 62, 30 62, 29 60 L 28 50 L 26 28" fill="none" />',
        '    <!-- Left Leg -->',
        '    <path d="M 15 50 L 12 75 L 12 95 C 12 98, 16 98, 16 95 L 17 75 L 20 52" fill="none" />',
        '    <!-- Right Leg -->',
        '    <path d="M 25 50 L 28 75 L 28 95 C 28 98, 24 98, 24 95 L 23 75 L 20 52" fill="none" />',
        '    <!-- Architectural scale line (optional, but looks cool) -->',
        '    <line x1="38" y1="2" x2="38" y2="98" stroke="rgba(255, 255, 255, 0.3)" stroke-dasharray="2 2" stroke-width="0.5" />',
        '    <line x1="36" y1="2" x2="40" y2="2" stroke="rgba(255, 255, 255, 0.3)" stroke-width="0.5" />',
        '    <line x1="36" y1="98" x2="40" y2="98" stroke="rgba(255, 255, 255, 0.3)" stroke-width="0.5" />',
        '  </g>',
        '</svg>'
    ].join('\n');

    return `data:image/svg+xml;base64,${btoa(svgStr)}`;
};
