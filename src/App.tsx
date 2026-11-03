import { MessageCircle, MapPin, CheckCircle, ArrowUpRight, Navigation, Clock } from 'lucide-react'

// ===================================================
// CONFIGURACIÓN RÁPIDA DE CONTACTO
// ===================================================
const CONFIG = {
  businessName: 'Desechables Guillén',
  slogan: 'Desechables y materias primas para tu negocio o evento',
  whatsappNumber: '524531159737',
  whatsappMessage: '¡Hola! Me gustaría cotizar productos desechables con Desechables Guillén.',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61578748297963',
  mapsUrl: 'https://maps.app.goo.gl/fuRTjZAtPBNdxeaM7',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=19.0920618,-102.3527957&hl=es&z=17&output=embed',
  city: 'Apatzingán, Michoacán • Servicio local y entregas inmediatas',
}

const WHATSAPP_LINK = `https://wa.me/${CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* Botón flotante de WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950" />
        <span className="hidden sm:inline text-sm font-black">WhatsApp</span>
      </a>

      {/* Header / Barra Superior */}
      <header className="absolute top-0 left-0 right-0 z-30 border-b border-white/10 backdrop-blur-md bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Desechables Guillén"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
            />
            <span className="text-lg sm:text-xl font-black tracking-tight text-white hidden sm:inline">
              Desechables <span className="text-emerald-400 font-extrabold">Guillén</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#ubicacion"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Ubicación</span>
            </a>
            <a
              href={CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition"
            >
              <FacebookIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold transition"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section Principal con Foto de Fondo de Bodega de Desechables */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
        {/* Imagen de fondo con overlay suave para visibilidad de la bodega */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="Bodega de distribución de desechables y materias primas"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Logo Principal en Hero */}
          <div className="flex justify-center">
            <div className="p-2 sm:p-3 rounded-full bg-slate-950/70 border border-white/15 backdrop-blur-md shadow-2xl hover:scale-105 transition duration-300">
              <img
                src="/logo.png"
                alt="Desechables Guillén"
                className="h-32 sm:h-44 w-auto object-contain mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Desechables y Materias Primas • Venta por mayoreo y menudeo
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Todo en productos desechables para tu <span className="text-emerald-400">negocio</span> o <span className="text-emerald-400">evento</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Contamos con recipientes térmicos, vasos, bolsas, cubiertos y alternativas ecológicas. Contáctanos directamente para pedidos y listas de precios.
          </p>

          {/* Botones de Acción Principales */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-xl text-base shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              Escríbenos por WhatsApp
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <a
              href={CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition"
            >
              <FacebookIcon className="w-5 h-5" />
              Visítanos en Facebook
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <a
              href={CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl text-base border border-white/20 backdrop-blur-md transition"
            >
              <MapPin className="w-5 h-5 text-emerald-400" />
              Cómo llegar
            </a>
          </div>

          {/* Puntos de Confianza */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Precios especiales a restaurantes
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Surtido garantizado
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Atención inmediata
            </span>
          </div>
        </div>
      </section>

      {/* Galería de Fotos / Productos */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Nuestras Líneas Principales</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Calidad y resistencia para conservar tus alimentos y bebidas con la mejor presentación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Tarjeta 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
                  alt="Recipientes para alimentos y delivery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500 text-slate-950">
                  Comida & Delivery
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white">Contenedores y Recipientes</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Cajas térmicas, charolas, platos, recipientes herméticos y materiales resistentes a grasas y líquidos.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                  alt="Vasos para café y bebidas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-1 rounded bg-blue-500 text-white">
                  Bebidas Frías & Calientes
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white">Vasos y Tapas</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Vasos de papel para café, vasos PET cristal para frappes, tapas planas, tapas domo y popotes.
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80"
                  alt="Línea ecológica y bolsas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-1 rounded bg-amber-400 text-slate-950">
                  Línea Ecológica & Bolsas
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white">Bolsas, Papel & Biodegradables</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Bolsas de papel kraft con asa, cubiertos biodegradables, servilletas y rollos de aluminio o película.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Ubicación y Mapa */}
      <section id="ubicacion" className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Nuestra Sucursal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Visítanos y conoce nuestro surtido
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ven directamente por tus productos o pide cotización para entrega. ¡Será un gusto atenderte!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Tarjeta de Información */}
            <div className="lg:col-span-5 space-y-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Desechables Guillén</h3>
                    <p className="text-slate-300 text-sm mt-1">Apatzingán, Michoacán, México</p>
                    <p className="text-slate-500 text-xs mt-0.5">Ubicación directa en Google Maps</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Horario de Atención</h3>
                    <p className="text-slate-300 text-sm mt-1">Lunes a Sábado</p>
                    <p className="text-slate-500 text-xs mt-0.5">Atención en tienda y por WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href={CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition shadow-lg shadow-emerald-500/20"
                >
                  <Navigation className="w-5 h-5 fill-slate-950" />
                  Abrir en Google Maps (Cómo llegar)
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-white/10 font-semibold py-3 px-6 rounded-xl transition text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Contactar antes de visitarnos
                </a>
              </div>
            </div>

            {/* Mapa Embebido de Google Maps */}
            <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-950">
              <iframe
                title="Ubicación de Desechables Guillén en Google Maps"
                src={CONFIG.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Contacto / Call to Action con Foto de Fondo de Bodega / Almacén */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80"
            alt="Almacén de productos desechables"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            ¿Necesitas cotizar o hacer un pedido?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Te respondemos rápido por WhatsApp o en nuestra página de Facebook para atender cualquier solicitud o duda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-base transition"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              Chatear por WhatsApp
            </a>
            <a
              href={CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl text-base transition"
            >
              <FacebookIcon className="w-5 h-5" />
              Seguir en Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 px-4 sm:px-6 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Desechables Guillén"
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg font-bold text-white">Desechables Guillén</span>
            </div>
            <p className="text-slate-400 text-xs">{CONFIG.slogan}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {CONFIG.city}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center text-white transition"
              title="Abrir en Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
            <a
              href={CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-white transition"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center text-white transition"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} {CONFIG.businessName}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
