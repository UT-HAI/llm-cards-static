import type { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  backgroundColor: string;
  backgroundImage?: string;
  textColor?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Container({
  backgroundColor,
  backgroundImage = "",
  textColor = "white",
  style,
  children,
}: ContainerProps) {
  return (
    <section
      className="min-w-screen"
      style={{
        ...style,
        backgroundColor,
        color: textColor,
        backgroundImage,
        backgroundSize: "cover",
      }}
    >
      <div className="p-8 mx-auto my-0 max-w-[1000px]">{children}</div>
    </section>
  );
}
