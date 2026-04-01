export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JL logo"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>

      <rect width="40" height="40" rx="9" fill="url(#logo-bg)" />

      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="white"
      >
        JL
      </text>
    </svg>
  );
}
