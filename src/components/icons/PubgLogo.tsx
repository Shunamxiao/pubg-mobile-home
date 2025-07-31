import type { SVGProps } from "react";

export function PubgLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 245 50"
      width="140"
      height="30"
      {...props}
    >
      <style>
        {`.font-logo { font-family: 'PT Sans', sans-serif; font-weight: 700; font-size: 32px; fill: white; letter-spacing: -0.5px; }`}
      </style>
      <text x="0" y="35" className="font-logo">
        PUBG MOBILE HUB
      </text>
    </svg>
  );
}
