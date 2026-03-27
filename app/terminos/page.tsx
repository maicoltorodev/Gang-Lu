'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#050202] text-white selection:bg-yellow-500/30 font-sans overflow-x-hidden">
      {/* Background FX */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(153,0,0,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 pointer-events-none" />

      {/* Simplified Navbar for Legal Pages */}
      <nav className="relative z-50 pt-10 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group text-white/50 hover:text-[#ffcc00] transition-colors">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-['var(--font-bebas)'] tracking-widest uppercase text-sm font-bold">Volver al Inicio</span>
        </Link>
        <div className="relative w-32 h-10">
          <Image src="/imagen-navbar.png" alt="Gang Lu Signature" fill className="object-contain" unoptimized />
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-24 pb-16 px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[#ffcc00] font-['var(--font-bebas)'] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Acuerdo de Servicio</span>
          <h1 className="font-['var(--font-bebas)'] text-5xl md:text-7xl font-bold mb-8 text-white uppercase tracking-wider">Términos y Condiciones</h1>
          <div className="h-1 w-24 bg-[#ffcc00] mx-auto rounded-full" />
        </motion.div>
      </header>

      {/* Content Section */}
      <main className="relative pb-32 px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto bg-[#990000]/10 backdrop-blur-3xl p-8 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl"
        >
          <article className="prose prose-invert prose-yellow max-w-none space-y-8 text-white/70 leading-relaxed font-medium">
            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">1. Generalidades</h2>
              <p>
                Al acceder y solicitar servicios a través de la plataforma digital de Gang Lu Tradición China, usted acepta cumplir con los términos y condiciones aquí descritos. Estos términos regulan el uso de nuestra página y la compra de productos gastronómicos.
              </p>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">2. Pedidos y Precios</h2>
              <p>
                Todos los pedidos están sujetos a disponibilidad de ingredientes y zona de cobertura para domicilios. Los precios indicados en nuestro menú digital incluyen los impuestos de ley vigentes en 2026.
              </p>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">3. Entrega a Domicilio</h2>
              <p>
                Nos esforzamos por cumplir con los tiempos de entrega estimados. El costo del servicio de domicilio puede variar según la ubicación. Gang Lu se reserva el derecho de rechazar pedidos en zonas de difícil acceso por seguridad de nuestro equipo.
              </p>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">4. Cancelaciones y Cambios</h2>
              <p>
                Debido a la naturaleza perecedera de nuestros alimentos, las cancelaciones deben realizarse de manera inmediata. Una vez que el pedido ha pasado a preparación en el wok, no se aceptarán cambios ni devoluciones.
              </p>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">5. Propiedad Intelectual</h2>
              <p>
                El logotipo, nombre y contenido visual de Gang Lu Tradición China son propiedad exclusiva del restaurante. Queda prohibido cualquier uso no autorizado de su identidad visual y recetas legendarias.
              </p>
            </section>
          </article>

          <footer className="mt-16 pt-12 border-t border-white/5 text-center">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Última actualización: Marzo 2026</p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
