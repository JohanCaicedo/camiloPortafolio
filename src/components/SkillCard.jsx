import LiquidGlassCard from "./LiquidGlass.jsx";

export const SkillCard = ({
  title,
  imageSrc,
  imageAlt,
  experienceLevel,
  experienceClass = "text-gray-600 dark:text-gray-400",
  icon,
  bgColor,
}) => {
  const levelClass = `text-xs font-medium ${experienceClass}`;

  return (
    <LiquidGlassCard
      className="h-48 w-40 flex-shrink-0 cursor-grab active:cursor-grabbing"
      glassBgClass={bgColor}
    >
      <div className="relative z-50 flex flex-col h-full w-full items-center p-4">
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="h-16 flex items-center justify-center mb-3">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 object-contain pointer-events-none"
              />
            ) : (
              <div
                className="h-14 w-14 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            )}
          </div>
          
          <h4
            className="font-bold text-center text-md text-[#1d1735] dark:text-[#fafaf6] leading-tight"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h4>
        </div>

        <div className="mt-auto pt-2 text-center border-t border-black/10 dark:border-white/10 w-full">
          <p className={levelClass}>
            {experienceLevel}
          </p>
        </div>
      </div>
    </LiquidGlassCard>
  );
};