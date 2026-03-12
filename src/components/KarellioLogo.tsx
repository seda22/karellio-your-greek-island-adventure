const KarellioLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const dimensions = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-xl",
  };

  return (
    <div
      className={`${dimensions[size]} relative flex items-center justify-center rounded-xl font-display font-black text-white`}
      style={{
        background: "linear-gradient(180deg, hsl(210 100% 65%) 0%, hsl(220 100% 50%) 100%)",
        boxShadow:
          "0 0 20px 4px hsla(210, 100%, 60%, 0.45), 0 0 40px 8px hsla(220, 100%, 50%, 0.2), inset 0 1px 1px hsla(0, 0%, 100%, 0.3)",
      }}
    >
      <span
        className="relative z-10 drop-shadow-sm"
        style={{ textShadow: "0 0 12px hsla(210, 100%, 80%, 0.6)" }}
      >
        K
      </span>
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(180deg, hsla(200, 100%, 80%, 0.15) 0%, transparent 60%)",
        }}
      />
    </div>
  );
};

export default KarellioLogo;
