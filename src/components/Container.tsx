import type { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  backgroundColor: string;
  textColor?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Container({
  backgroundColor,
  textColor = "white",
  style,
  children,
}: ContainerProps) {
  return (
    <section
      className="min-w-[100vw]"
      style={{ ...style, backgroundColor, color: textColor }}
    >
      <div className="p-8 mx-auto my-0 max-w-[1000px]">{children}</div>
    </section>
  );
}
