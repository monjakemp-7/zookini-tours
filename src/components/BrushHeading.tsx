import type { ReactNode } from "react";

type BrushHeadingProps = {
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  children: ReactNode;
};

export function BrushHeading({ as: Tag = "h2", id, className = "", children }: BrushHeadingProps) {
  return (
    <Tag id={id} className={`brush-title ${className}`.trim()}>
      {children}
      <svg className="brush-stroke" viewBox="0 0 240 18" preserveAspectRatio="none" aria-hidden="true">
        <path
          pathLength={1}
          d="M4 11c16-7 27 6 44 2s24-9 42-4 22 8 40 3 26-8 42-3 24 6 36 2 22-5 28-1"
        />
      </svg>
    </Tag>
  );
}
