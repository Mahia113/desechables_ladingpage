import { useState } from 'react'
import {
  Package,
  Leaf,
  Truck,
  ShieldCheck,
  Phone,
  MessageCircle,
  Clock,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Layers,
  UtensilsCrossed,
  Coffee,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from 'lucide-react'

interface Category {
  id: string
  title: string
  desc: string
  tag: string
  icon: any
  items: string[]
}

const CATEGORIES: Category[] = [
  {
    id: 'eco',
    title: 'Línea Biodegradable y Compostable',
    desc: 'Empaques de bagazo de caña, fécula de maíz y papel kraft ecológico que cuidan el planeta.',
    tag: 'Eco-Friendly',
    icon: Leaf,
    items: ['Contenedores de caña', 'Cubiertos de CPLA', 'Bolsas compostables', 'Vasos de papel kraft']
  },
  {
    id: 'vasos',
    title: 'Vasos y Bebidas',
    desc: 'Vasos térmicos, transparentes para frappes y bebidas frías, domos y tapas herméticas.',
    tag: 'Cafeterías y Bares',
    icon: Coffee,
    items: ['Vasos térmicos unicel/papel', 'Vasos PET cristal con domo', 'Popotes compostables', 'Portavasos de cartón']
  },
  {
    id: 'contenedores',
    title: 'Contenedores y Empaques Delivery',
    desc: 'Cajas herméticas térmicas para comida rápida, sushi, hamburguesas y banquetes.',
    tag: 'Delivery Seguro',
    icon: Package,
    items: ['Cajas térmicas tipo clamshell', 'Contenedores microhorneables', 'Charolas multiusos', 'Bowls para ensaladas']
  },
  {
    id: 'cubiertos',
    title: 'Cubiertos y Servilletas',
    desc: 'Kits individuales higiénicos de tenedor, cuchillo, servilleta y palillo sellados.',
    tag: 'Higiene Total',
    icon: UtensilsCrossed,
    items: ['Kits de cubiertos empacados', 'Cubiertos de uso rudo', 'Servilletas interdobladas', 'Manteles individuales']
  },
  {
    id: 'bolsas',
    title: 'Bolsas y Rollos',
    desc: 'Bolsas camiseta, boutique, kraft con asa y rollos para empaque de alimentos y mercancía.',
    tag: 'Comercio y Tienda',
    icon: ShoppingBag,
    items: ['Bolsas kraft con asa', 'Bolsas camiseta biodegradable', 'Rollo de polietileno', 'Bolsas para congelación']
  },
  {
    id: 'aluminio',
    title: 'Películas, Aluminio y Papel',
    desc: 'Insumos clave para la cocina industrial, protección térmica y conservación de alimentos.',
    tag: 'Cocina & Restaurante',
    icon: Layers,
    items: ['Rollo de papel aluminio', 'Película plástica autoadherible', 'Papel encerado y antigrasa', 'Bobinas térmicas']
  }
]

const FAQS = [
  {
    q: '¿Manejan precios de mayoreo y medio mayoreo?',
    a: 'Sí, contamos con escalas de precios especiales para restaurantes, fondas, cafeterías, empresas de catering y distribuidores locales.'
  },
  {
    q: '¿Hacen envíos a domicilio o a todo el país?',
    a: 'Realizamos entregas locales en el mismo día o 24 horas hábiles, y despachos nacionales por paquetería consolidada con tarifas preferenciales.'
  },
  {
    q: '¿Cuentan con productos certificados 100% biodegradables?',
    a: 'Absolutamente. Toda nuestra línea ecológica cuenta con certificaciones de biodegradabilidad y compostabilidad válidas para normativas locales vigentes.'
  },
  {
    q: '¿Cómo puedo solicitar una cotización formal?',
    a: 'Puedes enviarnos tu lista directamente por WhatsApp usando el botón de la página o llamarnos a nuestra línea de atención para armar tu paquete personalizado.'
  }
]

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('todas')
  const [quoteCategory, setQuoteCategory] = useState<string>('Contenedores para Delivery')
  const [quoteQuantity, setQuoteQuantity] = useState<string>('Mayoreo (5+ cajas)')

  const filteredCategories = selectedCategory === 'todas'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === selectedCategory)

  const handleWhatsappQuote = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURI(
      `Hola! Me interesa cotizar desechables para mi negocio.\n\nCategoría: ${quoteCategory}\nVolumen estimado: ${quoteQuantity}\n¿Podrían brindarme información y catálogo de precios?`
    )
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Banner de Promoción */}
      <div className="bg-emerald-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-300" />
        <span>Precios especiales para Restaurantes, Cafeterías y Eventos. ¡Cotiza por caja y ahorra hasta 30%!</span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/20 text-white font-bold text-xl">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 block leading-tight">
                Desechables<span className="text-emerald-600">Pro</span>
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:block">Empaques & Soluciones Desechables</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#catalogo" className="hover:text-emerald-600 transition">Catálogo</a>
            <a href="#beneficios" className="hover:text-emerald-600 transition">¿Por qué elegirnos?</a>
            <a href="#cotizador" className="hover:text-emerald-600 transition">Cotizador</a>
            <a href="#faq" className="hover:text-emerald-600 transition">Preguntas</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm shadow-emerald-600/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Leaf className="w-4 h-4 text-emerald-600" />
                Línea Tradicional & 100% Biodegradable
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Desechables y empaques confiables para tu <span className="text-emerald-600">negocio</span> y <span className="text-emerald-600">eventos</span>.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Abastece tu restaurante, cafetería o evento social con la mayor variedad de recipientes térmicos, vasos, bolsas, cubiertos y empaques delivery con entrega rápida y precio de mayoreo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#cotizador"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-600/25 transition active:scale-95 text-base"
                >
                  Solicitar Cotización Inmediata
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#catalogo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 px-6 py-3.5 rounded-xl font-semibold transition text-base"
                >
                  Ver Catálogo
                </a>
              </div>

              {/* Badges de confianza */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">+500</p>
                  <p className="text-xs text-slate-500 font-medium">Productos disponibles</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">24 hrs</p>
                  <p className="text-xs text-slate-500 font-medium">Envío local express</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">Mayoreo</p>
                  <p className="text-xs text-slate-500 font-medium">Precios por caja y tarima</p>
                </div>
              </div>
            </div>

            {/* Tarjeta Visual de Destacados */}
            <div className="lg:col-span-5">
              <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80">
                <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                  ⭐ Lo Más Solicitado
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-emerald-600" />
                  Kits para Alimentos y Delivery
                </h3>
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900">Contenedores Clamshell Caña</h4>
                      <p className="text-xs text-slate-500">100% compostable • Caliente y frío</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">Eco</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900">Vasos PET Cristal con Domo</h4>
                      <p className="text-xs text-slate-500">12, 16 y 24 oz con tapa hermética</p>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-lg">Bebidas</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900">Kits de Cubiertos Higiénicos</h4>
                      <p className="text-xs text-slate-500">Empaque individual sellado</p>
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg">Higiene</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Facturación electrónica disponible
                  </span>
                  <span>Stock garantizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">¿Por qué surtir con nosotros?</h2>
            <p className="mt-3 text-slate-600">Ofrecemos servicio puntual, precios competitivos y asesoría en empaques para tu marca.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Entregas Rápidas</h3>
              <p className="text-sm text-slate-600">Despacho continuo para que nunca te quedes sin empaques en horas pico o fines de semana.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Grado Alimenticio</h3>
              <p className="text-sm text-slate-600">Materiales seguros, inocuos y con resistencia térmica para no alterar el sabor de tus alimentos.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Alternativas Verdes</h3>
              <p className="text-sm text-slate-600">Amplio surtido de materiales biodegradables, caña de azúcar, maíz y cartón reciclable.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Atención Inmediata</h3>
              <p className="text-sm text-slate-600">Respuesta rápida por WhatsApp para cotizaciones, facturas y reabastecimiento periódico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Categorías */}
      <section id="catalogo" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">Nuestro Catálogo</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Líneas de Productos para todo uso</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('todas')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${selectedCategory === 'todas' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
              >
                Todas las categorías
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${selectedCategory === cat.id ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.id} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{cat.desc}</p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Incluye comúnmente:</p>
                      <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                        {cat.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#cotizador"
                    onClick={() => setQuoteCategory(cat.title)}
                    className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-semibold text-sm transition"
                  >
                    Cotizar esta línea
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cotizador Rápido */}
      <section id="cotizador" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-emerald-300 text-xs uppercase font-bold tracking-widest">Cotización Express</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">Arma tu cotización en 30 segundos</h2>
            <p className="text-emerald-100 mt-2 text-sm sm:text-base">Selecciona tu categoría de interés y volumen para conectarte con un asesor comercial.</p>
          </div>

          <form onSubmit={handleWhatsappQuote} className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Línea de producto
                </label>
                <select
                  value={quoteCategory}
                  onChange={(e) => setQuoteCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Línea Biodegradable y Compostable">Línea Biodegradable y Compostable</option>
                  <option value="Vasos y Bebidas">Vasos y Bebidas</option>
                  <option value="Contenedores y Empaques Delivery">Contenedores y Empaques Delivery</option>
                  <option value="Cubiertos y Servilletas">Cubiertos y Servilletas</option>
                  <option value="Bolsas y Rollos">Bolsas y Rollos</option>
                  <option value="Películas, Aluminio y Papel">Películas, Aluminio y Papel</option>
                  <option value="Paquete Surtido para Restaurante / Cafetería">Paquete Surtido para Negocio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Volumen estimado
                </label>
                <select
                  value={quoteQuantity}
                  onChange={(e) => setQuoteQuantity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Menudeo (1 a 4 paquetes)">Menudeo (1 a 4 paquetes)</option>
                  <option value="Medio Mayoreo (1 a 3 cajas)">Medio Mayoreo (1 a 3 cajas)</option>
                  <option value="Mayoreo (5+ cajas)">Mayoreo (5+ cajas)</option>
                  <option value="Distribución / Tarima completa">Distribución / Tarima completa</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-emerald-600/30 transition active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar Cotización a WhatsApp
            </button>

            <p className="text-center text-xs text-slate-500">
              Te atenderá un asesor especializado con catálogo digital y lista de precios oficial.
            </p>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Preguntas Frecuentes</h2>
            <p className="mt-2 text-slate-600 text-sm">Todo lo que necesitas saber sobre compras y pedidos.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left font-semibold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Package className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white">DesechablesPro</span>
            </div>
            <p className="text-xs sm:text-sm">
              Soluciones integrales de empaque y desechables para negocios de alimentos, eventos e industria.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="text-emerald-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> Atención Lunes a Sábado
              </span>
            </div>
          </div>
          <div className="pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} DesechablesPro. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
