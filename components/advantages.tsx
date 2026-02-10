import { Eye, Circle, Shield, Flame, TreePine, Wrench, Building2, MapPin } from "lucide-react"

const advantages = [
  {
    icon: Eye,
    title: "Панорамная дверца",
    description:
      "Жаропрочное стекло и направленная подача воздуха — огонь всегда виден, стекло дольше остаётся прозрачным.",
  },
  {
    icon: Circle,
    title: "Круглый корпус",
    description:
      "Минимум сварных швов, равномерное распределение тепла. Снижен риск прогорания — выше срок службы.",
  },
  {
    icon: Shield,
    title: "Долговечность",
    description:
      "Нет углов с локальным перегревом. Меньше деформаций. Рассчитана на многолетнюю эксплуатацию.",
  },
  {
    icon: Flame,
    title: "Большая каменка",
    description:
      "Камни прогреваются со всех сторон. Мягкий, насыщенный, долгоиграющий пар для классической бани.",
  },
  {
    icon: TreePine,
    title: "Только дрова",
    description:
      "Никакой электроники. Автономность, надёжность, настоящий банный огонь и аромат дров.",
  },
  {
    icon: Wrench,
    title: "Выносная топка",
    description:
      "Модели с выносной и встроенной топкой. Топите из комнаты отдыха — парная остаётся чистой.",
  },
  {
    icon: Building2,
    title: "Для любых бань",
    description:
      "Частные и коммерческие бани, гостевые сауны. Подбор под объём парной.",
  },
  {
    icon: MapPin,
    title: "Сделано в Новосибирске",
    description:
      "Российское производство. Контроль качества, быстрая коммуникация, понятные сроки.",
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Почему ALTAI
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Инженерные решения, а не маркетинг
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Каждая деталь печей ALTAI продумана для долговечности, безопасности и настоящего банного удовольствия.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <item.icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
