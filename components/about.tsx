import { Factory, Truck, Headphones } from "lucide-react"

const stats = [
  { value: "10+", label: "Лет на рынке" },
  { value: "5 000+", label: "Установленных печей" },
  { value: "50+", label: "Городов доставки" },
  { value: "100%", label: "Российское производство" },
]

const services = [
  {
    icon: Factory,
    title: "Собственное производство",
    description: "Полный цикл: от проектирования до сборки в Новосибирске. Контроль каждого этапа.",
  },
  {
    icon: Truck,
    title: "Доставка по России",
    description: "Отправляем транспортными компаниями в любой регион. Надёжная упаковка.",
  },
  {
    icon: Headphones,
    title: "Поддержка и монтаж",
    description: "Поможем подобрать печь, дымоход и организуем монтаж под ключ.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              О производстве
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-6">
              Печи, которым доверяют
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              ALTAI — это не просто печи, а продуманная система для вашей бани.
              Мы проектируем и производим каждую печь на собственном заводе
              в Новосибирске, контролируя качество на каждом этапе.
              Совместимость с дымоходами, правильная тяга, безопасная
              эксплуатация — всё это включено в каждую модель.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
                  <div className="text-3xl font-bold text-foreground font-serif">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card border border-border/50 p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
