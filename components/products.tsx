"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const products = [
  {
    id: 1,
    name: "ALTAI Compact 12",
    image: "/images/stove-1.jpg",
    price: "42 900",
    volume: "8-14",
    power: "12 кВт",
    weight: "48 кг",
    features: ["Панорамное стекло", "Круглый корпус", "Каменка 40 кг"],
    badge: "Хит продаж",
  },
  {
    id: 2,
    name: "ALTAI Panorama 18",
    image: "/images/stove-2.jpg",
    price: "59 500",
    volume: "12-22",
    power: "18 кВт",
    weight: "65 кг",
    features: ["Выносная топка", "Увеличенное стекло", "Каменка 80 кг"],
    badge: null,
  },
  {
    id: 3,
    name: "ALTAI Classic 15",
    image: "/images/stove-3.jpg",
    price: "51 200",
    volume: "10-18",
    power: "15 кВт",
    weight: "55 кг",
    features: ["Встроенная топка", "Панорамное стекло", "Каменка 60 кг"],
    badge: "Новинка",
  },
  {
    id: 4,
    name: "ALTAI Grand 24",
    image: "/images/stove-4.jpg",
    price: "78 900",
    volume: "18-30",
    power: "24 кВт",
    weight: "82 кг",
    features: ["Выносная топка", "XL панорамное стекло", "Каменка 120 кг"],
    badge: "Премиум",
  },
]

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Каталог
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Наши модели
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Подберите печь под объём вашей парной. От компактных до
            коммерческих решений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-card border border-border/50 overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1.5 font-medium">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{"руб."}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
                  <div>
                    <span className="text-foreground/60">{"Объём:"}</span>{" "}
                    {product.volume} {"м³"}
                  </div>
                  <div>
                    <span className="text-foreground/60">{"Мощность:"}</span>{" "}
                    {product.power}
                  </div>
                  <div>
                    <span className="text-foreground/60">{"Вес:"}</span>{" "}
                    {product.weight}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 w-full py-3 text-sm uppercase tracking-widest transition-all duration-300 ${
                    hoveredId === product.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
