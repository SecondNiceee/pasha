"use client"

import { useState } from "react"
import { Menu, X, Flame } from "lucide-react"

const navLinks = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Модели", href: "#products" },
  { label: "О производстве", href: "#about" },
  { label: "Контакты", href: "#contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Flame className="h-7 w-7 text-primary" />
          <span className="text-xl font-serif font-bold tracking-wider text-foreground">
            ALTAI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-primary/60 text-primary px-5 py-2.5 text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Связаться
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="Меню"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="border border-primary/60 text-primary px-5 py-2.5 text-sm uppercase tracking-widest text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Связаться
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
