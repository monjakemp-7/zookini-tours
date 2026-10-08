import Image from "next/image";

const marks = {
  colour: "/logo-zookini.png",
  white: "/logo-zookini-on-dark.png",
} as const;

type LogoProps = {
  /** `colour` on light grounds. `white` keeps the cyan sun and turns the wordmark white for teal bands. */
  variant?: keyof typeof marks;
  className?: string;
  labelled?: boolean;
  priority?: boolean;
};

export function Logo({ variant = "colour", className = "", labelled = true, priority = false }: LogoProps) {
  return (
    <span className={`relative inline-block aspect-[400/311] shrink-0 ${className}`}>
      <Image
        src={marks[variant]}
        alt={labelled ? "Zookini Tours logo, Celebrating Life!" : ""}
        fill
        priority={priority}
        sizes="(max-width: 768px) 160px, 240px"
        className="object-contain"
      />
    </span>
  );
}
