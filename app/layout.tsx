import type { Metadata } from 'next';
import { Inter, Noto_Serif, Shojumaru, Ma_Shan_Zheng, Orbitron, Bebas_Neue } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-bebas',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
});

const shojumaru = Shojumaru({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-display',
});

const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-chinese',
});

export const metadata: Metadata = {
  title: 'Restaurante Chino Gang Lu | Auténtica Comida China',
  description: 'El mejor arroz chino, camarón y lo mein a domicilio. Pide ahora por WhatsApp.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${notoSerif.variable} ${shojumaru.variable} ${maShanZheng.variable} ${orbitron.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="bg-[#cc0000] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
