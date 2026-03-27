'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export default function PrivacidadPage() {
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
          <span className="text-[#ffcc00] font-['var(--font-bebas)'] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Protección de Datos</span>
          <h1 className="font-['var(--font-bebas)'] text-5xl md:text-7xl font-bold mb-8 text-white uppercase tracking-wider">Política de Privacidad</h1>
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
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">1. Introducción</h2>
              <p>
                En Gang Lu Tradición China, valoramos su privacidad y estamos comprometidos con la protección de sus datos personales. Esta política describe cómo recolectamos y utilizamos su información al interactuar con nuestra plataforma digital.
              </p>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">2. Recopilación de Información</h2>
              <p>
                Recolectamos información básica necesaria para procesar sus pedidos de comida, la cual puede incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nombre y datos de contacto.</li>
                <li>Dirección de entrega para servicios de domicilio.</li>
                <li>Preferencias de pedido y servicios solicitados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">3. Uso de los Datos</h2>
              <p>
                Su información se utiliza exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Gestionar y entregar sus pedidos de restaurante.</li>
                <li>Notificaciones sobre el estado de su pedido.</li>
                <li>Mejorar nuestra experiencia gastronómica digital.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">4. Seguridad</h2>
              <p>
                Implementamos medidas de seguridad digitales robustas basadas en los estándares de 2026 para proteger su información contra acceso no autorizado, alteración o divulgación.
              </p>
            </section>

            <section>
              <h2 className="text-[#ffcc00] font-['var(--font-bebas)'] text-2xl tracking-widest uppercase mb-4">5. Contacto</h2>
              <p>
                Para cualquier duda sobre el tratamiento de sus datos, puede contactarnos a través de nuestra línea oficial de atención al cliente.
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
