import { useId } from "react";

type Variant = "colour" | "white" | "dark";

const tones: Record<Variant, { burst: string; word: string }> = {
  colour: { burst: "#6EC8E8", word: "#607D82" },
  white: { burst: "#FFFFFF", word: "#FFFFFF" },
  dark: { burst: "#607D82", word: "#607D82" },
};

type LogoProps = {
  variant?: Variant;
  layout?: "emblem" | "lockup";
  className?: string;
  labelled?: boolean;
};

function Sunburst({
  burst,
  maskId,
  cx,
  cy,
}: {
  burst: string;
  maskId: string;
  cx: number;
  cy: number;
}) {
  return (
    <>
      <mask id={maskId}>
        <rect width="100%" height="100%" fill="white" />
        <circle cx={cx} cy={cy} r="8" fill="black" />
      </mask>
      <g mask={`url(#${maskId})`}>
        {Array.from({ length: 16 }, (_, index) => (
          <rect
            key={index}
            x={cx - 2}
            y={cy - 28}
            width="4"
            height="14"
            rx="2"
            fill={burst}
            transform={`rotate(${index * 22.5} ${cx} ${cy})`}
          />
        ))}
        <circle cx={cx} cy={cy} r="16" fill={burst} />
      </g>
    </>
  );
}

export function Logo({
  variant = "colour",
  layout = "emblem",
  className,
  labelled = true,
}: LogoProps) {
  const reactId = useId().replace(/:/g, "");
  const archId = `zookini-arch-${reactId}`;
  const maskId = `zookini-mask-${reactId}`;
  const { burst, word } = tones[variant];
  const a11y = {
    role: labelled ? "img" : undefined,
    "aria-label": labelled ? "Zookini Tours. Celebrate Life!" : undefined,
    "aria-hidden": labelled ? undefined : true,
  };

  if (layout === "lockup") {
    return (
      <svg viewBox="0 0 268 68" className={className} {...a11y}>
        <Sunburst burst={burst} maskId={maskId} cx={34} cy={34} />
        <path id={archId} d="M 76 36 Q 166 14 256 36" fill="none" />
        <text
          fill={word}
          fontFamily="Raleway, system-ui, sans-serif"
          fontSize="15"
          fontWeight="500"
          letterSpacing="1.6"
        >
          <textPath href={`#${archId}`} startOffset="50%" textAnchor="middle">
            ZOOKINI TOURS
          </textPath>
        </text>
        <text
          x="166"
          y="54"
          textAnchor="middle"
          fill={word}
          fontFamily="Raleway, system-ui, sans-serif"
          fontSize="11"
          fontWeight="500"
          letterSpacing="2.2"
        >
          CELEBRATE LIFE!
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 214"
      className={className}
      role={labelled ? "img" : undefined}
      aria-label={labelled ? "Zookini Tours. Celebrate Life!" : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      <path id={archId} d="M 28 112 A 72 72 0 0 1 172 112" fill="none" />
      <text
        fill={word}
        fontFamily="Raleway, system-ui, sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="2.2"
      >
        <textPath href={`#${archId}`} startOffset="50%" textAnchor="middle">
          ZOOKINI TOURS
        </textPath>
      </text>
      <mask id={maskId}>
        <rect width="200" height="214" fill="white" />
        <circle cx="100" cy="128" r="11" fill="black" />
      </mask>
      <g mask={`url(#${maskId})`}>
        {Array.from({ length: 16 }, (_, index) => (
          <rect
            key={index}
            x="97.4"
            y="80"
            width="5.2"
            height="20"
            rx="2.6"
            fill={burst}
            transform={`rotate(${index * 22.5} 100 128)`}
          />
        ))}
        <circle cx="100" cy="128" r="27" fill={burst} />
      </g>
      <text
        x="100"
        y="198"
        textAnchor="middle"
        fill={word}
        fontFamily="Raleway, system-ui, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="2.4"
      >
        CELEBRATE LIFE!
      </text>
    </svg>
  );
}
