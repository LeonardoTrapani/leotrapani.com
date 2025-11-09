import { links } from "@/lib/constants"
import Link from "next/link"

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
