export function AshokChakra() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="#4169E1"
        strokeWidth="2"
      />
      
      {/* Inner circle */}
      <circle
        cx="100"
        cy="100"
        r="20"
        fill="none"
        stroke="#4169E1"
        strokeWidth="3"
      />

      {/* 24 spokes */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 100 + 20 * Math.cos(angle);
        const y1 = 100 + 20 * Math.sin(angle);
        const x2 = 100 + 95 * Math.cos(angle);
        const y2 = 100 + 95 * Math.sin(angle);
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#4169E1"
            strokeWidth="2"
          />
        );
      })}

      {/* Decorative dots at the end of each spoke */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x = 100 + 95 * Math.cos(angle);
        const y = 100 + 95 * Math.sin(angle);
        
        return (
          <circle
            key={`dot-${i}`}
            cx={x}
            cy={y}
            r="3"
            fill="#4169E1"
          />
        );
      })}
    </svg>
  );
}
