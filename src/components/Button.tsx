import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function Button({
  children,
  href,
  backgroundColor = "#1c2f60",
  textColor = "white",
}: ButtonProps) {
  return (
    <button className="text-lg">
      <a
        href={href}
        target="_blank"
        className="sans-serif underline border py-3 px-5"
        style={{
          backgroundColor: backgroundColor,
          borderColor: textColor,
          color: textColor,
        }}
      >
        {children}
      </a>
    </button>
  );
}
