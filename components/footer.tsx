import { Flame } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-primary" />
              <span className="text-lg font-serif font-bold tracking-wider text-foreground">
                ALTAI
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Дровяные печи с живым огнём и увеличенным сроком службы. Производим в Новосибирске.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground font-semibold mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Преимущества", href: "#advantages" },
                { label: "Модели", href: "#products" },
                { label: "О производстве", href: "#about" },
                { label: "Контакты", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground font-semibold mb-4">
              Модели
            </h4>
            <ul className="space-y-2">
              {["ALTAI Compact 12", "ALTAI Panorama 18", "ALTAI Classic 15", "ALTAI Grand 24"].map(
                (model) => (
                  <li key={model}>
                    <a
                      href="#products"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {model}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground font-semibold mb-4">
              Контакты
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+7 (383) 123-45-67</li>
              <li>info@altai-pechi.ru</li>
              <li>г. Новосибирск</li>
              <li>ул. Промышленная, 12</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"© 2026 ALTAI. Все права защищены."}
          </p>
          <p className="text-xs text-muted-foreground">
            Дровяные печи для бани и сауны
          </p>
        </div>
      </div>
    </footer>
  )
}
