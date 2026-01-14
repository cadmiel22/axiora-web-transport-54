interface AxioraLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function AxioraLogo({ className = "", showTagline = true, size = "md" }: AxioraLogoProps) {
  const sizes = {
    sm: { text: "text-xl", tagline: "text-[10px]" },
    md: { text: "text-2xl", tagline: "text-xs" },
    lg: { text: "text-4xl", tagline: "text-sm" },
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`${sizes[size].text} font-black tracking-tight flex items-center`}>
        <span className="text-primary">A</span>
        <span className="relative text-primary">
          X
          {/* Orange arrow integrated in the X */}
          <svg 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%]"
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M5 12H19M19 12L13 6M19 12L13 18" 
              stroke="hsl(24 100% 50%)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-primary">IORA</span>
      </div>
      {showTagline && (
        <span className={`${sizes[size].tagline} font-semibold text-muted-foreground tracking-[0.25em] uppercase`}>
          Transporte Pesado
        </span>
      )}
    </div>
  );
}
