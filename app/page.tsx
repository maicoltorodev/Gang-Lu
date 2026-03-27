'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { MapPin, Clock, Star, Utensils, ChevronRight, Menu, X, Flame, Plus } from 'lucide-react';
import Image from 'next/image';

const WHATSAPP_NUMBER = "3213002628"; // Número real actualizado
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quiero%20hacer%20un%20pedido`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const menuItems = [
  {
    title: "Arroz con Camarón",
    description: "Arroz wok premium con camarones selectos, raíces chinas y cebollín fresco.",
    image: "/arroz-camaron-nobg.png", // Usando la imagen local limpia
    price: "$24.900",
    category: "Favoritos",
    tag: "MÁS VENDIDO",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Pollo Agridulce",
    description: "Trozos de pollo crocante en salsa agridulce secreta con pimentón y piña.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000&auto=format&fit=crop",
    price: "$18.500",
    category: "Pollo",
    tag: "POPULAR",
    colSpan: "col-span-1",
  },
  {
    title: "Arroz Gang Lu Especial",
    description: "La joya de la casa: Pollo, cerdo, raíces chinas y un toque de jengibre.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop",
    price: "$21.000",
    category: "Favoritos",
    tag: "RECOMENDADO",
    colSpan: "col-span-1",
  },
  {
    title: "Lo Mein Mixto",
    description: "Pasta artesanal china salteada con vegetales frescos y mix de carnes.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop",
    price: "$19.900",
    category: "Pastas",
    tag: "NUEVO",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Alas Apanadas",
    description: "6 Alitas crocantes estilo oriental con salsa picante opcional.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop",
    price: "$16.500",
    category: "Especialidades",
    tag: "PICANTE",
    colSpan: "col-span-1",
  },
  {
    title: "Lumpia Tradicional",
    description: "Rollitos primavera rellenos de vegetales y carne con salsa de soya.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop",
    price: "$12.000",
    category: "Especialidades",
    tag: "PARA PICAR",
    colSpan: "col-span-1",
  },
];

const features = [
  { icon: Flame, text: "Sabor Auténtico" },
  { icon: Clock, text: "Entrega Rápida" },
  { icon: Utensils, text: "Porciones Generosas" },
  { icon: Star, text: "Calidad Premium" },
  { icon: Flame, text: "Receta Milenaria" },
  { icon: Clock, text: "Siempre Caliente" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#050202] text-white selection:bg-yellow-500/30 font-sans overflow-x-hidden">
      {/* Navbar - Modern 2026 Floating Dock Design */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
        <div className="bg-[#990000]/60 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-32 md:w-40 aspect-[4/1] cursor-pointer"
          >
            <Image src="/imagen-navbar.png" alt="Gang Lu Logo" fill className="object-contain" priority unoptimized />
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-['var(--font-bebas)'] font-bold uppercase tracking-widest">
            {['Inicio', 'Menú', 'Tradición'].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-white/80 hover:text-[#ffcc00] transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffcc00] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#ffcc00] hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-all shadow-[0_10px_20px_rgba(255,204,0,0.2)] active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>DOMICILIOS</span>
            </motion.a>

            <button className="md:hidden p-2 text-white hover:text-[#ffcc00] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#990000] flex flex-col items-center justify-center px-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,204,0,0.15)_0%,transparent_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-8 w-full max-w-sm">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-['var(--font-bebas)'] text-center text-white hover:text-[#ffcc00] transition-colors drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
              >
                NUESTRO MENÚ
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                href="#tradicion"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-['var(--font-bebas)'] text-center text-white hover:text-[#ffcc00] transition-colors drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
              >
                TRADICIÓN
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-[#ffcc00] hover:bg-yellow-400 text-black px-8 py-5 rounded-full font-bold text-xl active:scale-95 transition-transform mt-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-2 border-black/10"
              >
                <WhatsAppIcon className="w-6 h-6" />
                COMENZAR PEDIDO
              </motion.a>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[100svh] w-full flex flex-col justify-between overflow-hidden pt-[60px] md:pt-[80px] bg-gradient-to-b from-[#990000] via-[#cc0000] to-[#8a0000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,204,0,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_170deg,rgba(255,255,255,0.03)_180deg,transparent_190deg)] pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center flex-1 min-h-0 py-4 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-40 sm:w-56 md:w-72 lg:w-[700px] h-12 sm:h-16 md:h-20 lg:h-32 mb-4 sm:mb-6 md:md-8 pointer-events-none"
          >
            <div className="relative w-full h-full scale-y-[-1]">
              <Image src="/raiz.png" alt="Ornamento Superior" fill className="object-contain" priority />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] sm:max-w-[600px] aspect-[5/2] mb-6 md:mb-8 group sm:translate-y-18"
          >
            <div className="absolute inset-x-[-50vw] sm:inset-x-[-150vw] inset-y-[-12px] bg-[#cc0000] skew-y-[-1.5deg] border-y-2 border-[#ffcc00] shadow-[0_25px_50px_rgba(0,0,0,0.6)] z-0 rounded-3xl" />
            <div className="absolute inset-x-[-45vw] sm:inset-x-[-140vw] inset-y-[-4px] bg-gradient-to-r from-[#8a0000] via-[#cc0000] to-[#8a0000] skew-y-[-1.5deg] z-0 rounded-3xl" />
            <Image src="/titulo-hero.png" alt="Gang Lu" fill unoptimized className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,1)] z-10" priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[60%] sm:w-[50%] md:w-[75%] lg:w-full max-w-[750px] aspect-[4/3] flex items-center justify-center"
          >
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[70%] h-12 bg-black/50 blur-3xl rounded-[100%] z-10" />
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-48 h-48 bg-[#ffcc00]/20 blur-[100px] rounded-full z-10" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
              className="absolute left-[-35%] sm:left-[-45%] md:left-[-35%] top-1/2 -translate-y-1/2 w-32 sm:w-64 md:w-64 lg:w-[380px] aspect-square z-30"
            >
              <Image src="/mascota-nino.png" alt="Niño" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
              className="relative w-full h-full z-20"
            >
              <Image src="/arroz-camaron-nobg.png" alt="Arroz de Camarón Gang Lu" fill unoptimized className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]" priority />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ willChange: "transform" }}
              className="absolute right-[-35%] sm:right-[-45%] md:right-[-35%] top-1/2 -translate-y-1/2 w-32 sm:w-64 md:w-64 lg:w-[380px] aspect-square z-30"
            >
              <Image src="/mascota-nina.png" alt="Niña" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-40 sm:w-56 md:w-72 lg:w-[700px] h-12 sm:h-16 md:h-20 lg:h-32 mt-4 sm:mt-6 md:md-8 pointer-events-none"
          >
            <Image src="/raiz.png" alt="Ornamento Inferior" fill className="object-contain" priority />
          </motion.div>
        </div>

        <div className="w-full shrink-0 relative z-30">
          <div className="py-4 md:py-6 border-y-2 border-[#ffcc00]/60 bg-[#660000] overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.4)]">
            <motion.div
              className="flex whitespace-nowrap w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              style={{ willChange: "transform" }}
            >
              {[...features, ...features].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 mx-6 md:mx-12">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ffcc00]/20 flex items-center justify-center text-[#ffcc00]">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-base font-['var(--font-bebas)'] font-bold text-white tracking-widest uppercase">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-40 relative overflow-hidden bg-[#050202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(153,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-[#ffcc00] font-['var(--font-bebas)'] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Experiencia Gastronómica</span>
            <h2 className="font-['var(--font-bebas)'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white text-outline-black flex flex-col items-center">
              <span>NUESTRO</span>
              <span className="text-[#ffcc00]">MENÚ</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col h-full bg-[#990000]/40 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#ffcc00]/50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              >
                <div className="relative aspect-[3/2] sm:aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill unoptimized className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                    <span className="bg-[#ffcc00] text-black text-[10px] font-['var(--font-bebas)'] font-black px-4 py-1.5 rounded-full shadow-xl tracking-widest">{item.tag}</span>
                  </div>
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-2xl">
                      <span className="text-white font-['var(--font-bebas)'] font-black text-sm md:text-lg tracking-widest">{item.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-[#ffcc00] text-[10px] font-['var(--font-bebas)'] font-bold tracking-[0.2em] uppercase mb-2 md:mb-3 opacity-60">{item.category}</span>
                  <h3 className="font-['var(--font-bebas)'] text-2xl md:text-3xl text-white mb-2 md:mb-4 group-hover:text-[#ffcc00] transition-colors leading-tight uppercase font-black">{item.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 md:mb-8 flex-1 font-medium">{item.description}</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quiero%20pedir%20un%20${encodeURIComponent(item.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/5 hover:bg-[#ffcc00] text-white hover:text-black p-3 md:p-4 rounded-xl md:rounded-2xl transition-all group/btn border border-white/10 hover:border-[#ffcc00]">
                    <span className="font-['var(--font-bebas)'] font-bold text-xs md:text-sm tracking-widest uppercase">Ordenar Ahora</span>
                    <div className="bg-[#ffcc00] group-hover/btn:bg-black p-1.5 md:p-2 rounded-lg md:rounded-xl transition-colors">
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-black group-hover/btn:text-[#ffcc00]" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section id="tradicion" className="py-24 md:py-48 relative overflow-hidden bg-gradient-to-b from-[#050202] via-[#8a0000] to-[#550000]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-full lg:w-[45%] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#990000]/40 via-transparent to-[#ffcc00]/5 blur-[80px] rounded-full" />
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform" }} className="absolute left-0 w-[55%] aspect-square z-20">
                  <Image src="/mascota-nino.png" alt="Niño" fill className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]" />
                </motion.div>
                <motion.div animate={{ y: [20, -20, 20] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} style={{ willChange: "transform" }} className="absolute right-0 w-[55%] aspect-square z-10">
                  <Image src="/mascota-nina.png" alt="Niña" fill className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] scale-x-[-1]" />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-8 lg:-bottom-12 bg-[#ffcc00] text-black px-10 py-5 rounded-3xl font-black text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30">
                  <span className="block text-[10px] font-['var(--font-bebas)'] tracking-[0.3em] uppercase mb-1">TRADICIÓN</span>
                  <p className="text-2xl font-['var(--font-bebas)'] tracking-widest">100% FAMILIAR</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-center lg:items-start w-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-[#ffcc00]" />
                  <span className="text-[#ffcc00] font-['var(--font-bebas)'] font-black tracking-[0.4em] uppercase text-xs">Nuestra Historia</span>
                </div>
                <div className="relative w-full max-w-[500px] mb-12 group">
                  <div className="absolute left-[-100vw] right-[-100vw] inset-y-[-12px] bg-[#cc0000] skew-y-[1.5deg] border-y-2 border-[#ffcc00] shadow-[10px_20px_50px_rgba(0,0,0,0.6)] z-0" />
                  <div className="absolute left-[-100vw] right-[-100vw] inset-y-[-4px] bg-gradient-to-r from-[#8a0000] via-[#cc0000] to-[#8a0000] skew-y-[1.5deg] z-0" />
                  <div className="relative h-28 md:h-40 drop-shadow-[0_20px_40px_rgba(0,0,0,1)] z-10 flex justify-center lg:justify-start">
                    <Image src="/titulo-hero.png" alt="Gang Lu" fill className="object-contain" />
                  </div>
                </div>
                <p className="text-white/80 text-lg md:text-2xl leading-relaxed mb-12 font-medium max-w-2xl px-4 lg:px-0">
                  Nacimos del amor por la auténtica cocina china y el deseo de compartir momentos únicos en familia. Cada wok encendido es una promesa de calidad, frescura y el sabor que nos ha convertido en leyenda.
                </p>
                <div className="w-full grid grid-cols-3 gap-2 md:gap-12 mb-16 px-3 md:px-8 py-6 md:py-10 bg-[#990000]/30 backdrop-blur-2xl rounded-[2.5rem] border border-white/10">
                  {[
                    { label: 'Años de Sabor', value: '+4' },
                    { label: 'Receta Original', value: '100%' },
                    { label: 'Clientes Felices', value: '200k+' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center group border-r border-white/5 last:border-none">
                      <p className="text-xl md:text-4xl font-['var(--font-bebas)'] font-black text-[#ffcc00] mb-1 group-hover:scale-110 transition-transform tracking-widest">{stat.value}</p>
                      <p className="text-[8px] md:text-xs text-white/70 font-['var(--font-bebas)'] font-bold uppercase tracking-widest leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-start w-full">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#ffcc00] text-black font-['var(--font-bebas)'] font-black px-12 py-5 rounded-2xl hover:bg-yellow-400 transition-all text-lg tracking-widest uppercase shadow-[0_20px_40px_rgba(255,204,0,0.2)] active:scale-95 text-center">
                    Haz tu Pedido Ahora
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black pt-32 pb-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(153,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative w-48 md:w-64 h-24 mb-6">
              <Image src="/imagen-navbar.png" alt="Gang Lu" fill className="object-contain" unoptimized />
            </motion.div>
            <p className="text-[#ffcc00] font-['var(--font-bebas)'] font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs text-center">Tradición Milenaria • Sabor Legendario</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-24 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Servicio", desc: "Cra. 52 #138-94, Bogotá", action: "+57 (321) 300 2628" },
              { icon: Clock, title: "Horario", desc: "Lunes a Domingo", action: "11:00 AM - 10:00 PM" }
            ].map((module, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="w-full md:w-1/2 bg-[#990000]/10 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 hover:border-[#ffcc00]/30 transition-all flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-[#ffcc00]/10 flex items-center justify-center text-[#ffcc00] mb-8 group-hover:bg-[#ffcc00] group-hover:text-black transition-colors">
                  <module.icon className="w-6 h-6" />
                </div>
                <h4 className="font-['var(--font-bebas)'] text-2xl text-white mb-6 tracking-widest uppercase">{module.title}</h4>
                <p className="text-white/60 font-medium text-sm mb-2">{module.desc}</p>
                <p className="text-[#ffcc00] text-lg font-['var(--font-bebas)'] font-black tracking-widest uppercase">{module.action}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-6 text-[10px] text-white/20 font-['var(--font-bebas)'] font-bold uppercase tracking-widest text-center">
              <p>© {new Date().getFullYear()} Gang Lu Tradición China.</p>
              <div className="flex items-center gap-8">
                <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
                <a href="/terminos" className="hover:text-white transition-colors">Términos</a>
              </div>
            </div>

            <a href="https://inzidium.com" target="_blank" rel="noopener noreferrer" className="group/credit flex flex-col items-center gap-3 py-4 px-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <span className="text-[10px] text-white/30 uppercase font-black tracking-widest group-hover/credit:text-white/50 transition-colors">Desarrollado por</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                <span className="font-[family-name:var(--font-orbitron)] bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold text-sm tracking-widest group-hover/credit:scale-105 transition-transform normal-case">InZidium</span>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </div>
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        <motion.a
          initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
          href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl group"
        >
          <WhatsAppIcon className="w-8 h-8" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
