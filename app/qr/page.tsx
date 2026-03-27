import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generador de Pedidos | Gang Lu Restaurante Chino',
  description: 'Escanea nuestro código QR oficial para acceder al menú y realizar tu pedido a domicilio por WhatsApp. Auténtica comida china en Bogotá.',
  keywords: ['Gang Lu', 'Restaurante Chino Bogotá', 'Comida China Domicilio', 'Arroz Chino', 'QR Pedidos', 'Menú Gang Lu', 'Comida Oriental'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Gang Lu - Pedidos a Domicilio',
    description: 'Escanea nuestro código QR o toca para ver nuestro menú de auténtica comida china y hacer tu pedido por WhatsApp.',
    url: 'https://www.ganglu.site/qr',
    siteName: 'Gang Lu Tradición China',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function QRPage() {
  const qrImageSource = "/qr.png";

  return (
    <main className="min-h-screen bg-[#050202] flex items-center justify-center p-4">

      {/* ── OUTER CARD 1:1 ─────────────────────────────── */}
      <div className="relative w-full max-w-[560px] aspect-square rounded-[50px] bg-gradient-to-b from-[#990000] via-[#cc0000] to-[#8a0000] border-2 border-[#ffcc00] overflow-hidden shadow-[0_0_100px_rgba(255,204,0,0.08),0_40px_100px_rgba(0,0,0,0.9)]">

        {/* Overlays idénticos al hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,204,0,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_170deg,rgba(255,255,255,0.03)_180deg,transparent_190deg)] pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        {/* ── COLUMNA COMPLETA h-full ── */}
        <div className="relative z-10 flex flex-col h-full">

          {/* ── TITULO CON CINTA ── */}
          <div className="flex-none flex items-center justify-center pt-10 pb-3 px-10">
            <div className="relative w-full h-14">
              {/* Cinta roja sesgada */}
              <div className="absolute inset-x-[-100vw] inset-y-[-10px] bg-[#cc0000] skew-y-[-1.5deg] border-y-2 border-[#ffcc00] shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-0" />
              <div className="absolute inset-x-[-100vw] inset-y-[-3px] bg-gradient-to-r from-[#8a0000] via-[#cc0000] to-[#8a0000] skew-y-[-1.5deg] z-0" />
              {/* Título */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/titulo-hero.png"
                  alt="Gang Lu"
                  fill
                  unoptimized
                  priority
                  className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,1)]"
                />
              </div>
            </div>
          </div>

          {/* ── MIDDLE: QR + mascots ── */}
          <div className="relative flex-1 flex items-center justify-center">

            {/* Mascota izquierda */}
            <div className="absolute left-0 bottom-0 w-[26%] aspect-square pointer-events-none z-20">
              <Image
                src="/mascota-nino.png"
                alt="Mascota niño"
                fill
                className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* ── QR CARD ── */}
            <div className="relative w-[50%] aspect-square rounded-none bg-gradient-to-br from-[#cc0000] to-[#4d0000] flex items-center justify-center overflow-hidden border-2 border-[#ffcc00] shadow-[0_0_40px_rgba(255,204,0,0.2),0_15px_40px_rgba(0,0,0,0.8)] z-10">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)', backgroundSize: '14px 14px' }}
              />
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-2"
                  style={{
                    backgroundColor: '#ffcc00',
                    WebkitMaskImage: `url(${qrImageSource})`,
                    maskImage: `url(${qrImageSource})`,
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    filter: [
                      'drop-shadow(0 0 5px rgba(255,204,0,1))',
                      'drop-shadow(0 0 14px rgba(255,204,0,0.7))',
                      'drop-shadow(0 0 30px rgba(255,204,0,0.3))',
                    ].join(' '),
                  }}
                />
              </div>
            </div>

            {/* Mascota derecha */}
            <div className="absolute right-0 bottom-0 w-[26%] aspect-square pointer-events-none z-20">
              <Image
                src="/mascota-nina.png"
                alt="Mascota niña"
                fill
                className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>

          {/* ── CINTA AMARILLA BOTTOM ── */}
          <div className="flex-none py-2.5 border-y-2 border-[#ffcc00]/70 bg-[#cc0000]">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-[#ffcc00]/50" />
              <p className="font-['var(--font-bebas)'] text-[#ffcc00] tracking-[0.5em] uppercase text-xs">
                www.ganglu.site
              </p>
              <div className="h-px w-6 bg-[#ffcc00]/50" />
            </div>
          </div>

          {/* ── BOTTOM: ornamento ── */}
          <div className="flex-none flex flex-col items-center py-3 px-8 gap-1.5">
            <div className="relative w-32 h-6 opacity-45">
              <Image src="/raiz.png" alt="" fill className="object-contain" unoptimized />
            </div>
            <p className="text-white/25 text-[9px] text-center tracking-widest uppercase">
              Pide por WhatsApp · Entrega a domicilio
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
