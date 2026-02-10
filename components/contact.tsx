"use client"

import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Свяжитесь с нами
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Обсудим ваш проект
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Поможем подобрать печь, рассчитаем стоимость и организуем доставку в ваш город.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border border-primary/30 p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Заявка отправлена
                </h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="bg-card border border-border/50 p-8 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider"
                    >
                      Имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ваше имя"
                      className="w-full bg-secondary/50 border border-border/50 text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider"
                    >
                      Телефон
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-secondary/50 border border-border/50 text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-secondary/50 border border-border/50 text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Расскажите о вашем проекте: объём парной, тип бани, пожелания..."
                    className="w-full bg-secondary/50 border border-border/50 text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Отправить заявку
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border/50 p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
                Контактная информация
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">+7 (383) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт, 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">info@altai-pechi.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение дня</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">г. Новосибирск</p>
                    <p className="text-sm text-muted-foreground">
                      ул. Промышленная, 12
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-primary/20 p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Бесплатная консультация
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Не знаете, какую модель выбрать? Наши специалисты помогут
                подобрать идеальную печь под ваш проект бани.
              </p>
              <a
                href="tel:+73831234567"
                className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest hover:underline"
              >
                <Phone className="h-4 w-4" />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
