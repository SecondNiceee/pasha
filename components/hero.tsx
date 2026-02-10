import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Печь ALTAI в интерьере сауны"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">
          Дровяные печи нового поколения
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
          Живой огонь. Безупречная форма.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          ALTAI — дровяные печи с панорамным стеклом, круглым корпусом
          и увеличенным сроком службы. Производим в Новосибирске.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300"
          >
            Смотреть модели
          </a>
          <a
            href="#advantages"
            className="border border-foreground/20 text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
          >
            Узнать больше
          </a>
        </div>
      </div>

      <a
        href="#advantages"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Прокрутить вниз"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  )
}
