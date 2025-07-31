import Image from "next/image";

export function PubgLogo() {
  return (
    <div className="flex items-center gap-3">
      <Image 
        src="https://cdn.apks.cc/blinko/1753973194134-1753973193794-nav_logo.png" 
        alt="PUBG Mobile Logo"
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="font-bold text-lg text-white whitespace-nowrap">
        最正宗原始的PUBG Mobile手游
      </span>
    </div>
  );
}
