import Image from "next/image";

const wordmarks = {
  colour: "/logo/wordmark.png",
  white: "/logo/wordmark-on-dark.png",
} as const;

type LogoProps = {
  /** `colour` on light grounds. `white` keeps the cyan sun and turns the wordmark white for teal bands. */
  variant?: keyof typeof wordmarks;
  className?: string;
  labelled?: boolean;
  priority?: boolean;
};

export function Logo({ variant = "colour", className = "", labelled = true, priority = false }: LogoProps) {
  return (
    <span className={`logo-mark relative inline-block aspect-[400/311] shrink-0 ${className}`}>
      <span className="logo-sun" aria-hidden="true">
        <span className="logo-sun-rotor">
          <Image
            src="/logo/sunburst.png"
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 160px, 240px"
            className="object-contain"
          />
        </span>
      </span>
      <Image
        src={wordmarks[variant]}
        alt={labelled ? "Zookini Tours logo, Celebrating Life!" : ""}
        fill
        priority={priority}
        sizes="(max-width: 768px) 160px, 240px"
        className="logo-word object-contain"
      />
    </span>
  );
}
