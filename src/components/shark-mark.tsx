import Image from "next/image";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SharkMark({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/images/shark-logo.png"
        alt="Shark Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
