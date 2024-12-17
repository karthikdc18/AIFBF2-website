export default function GradientBg({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary opacity-5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}