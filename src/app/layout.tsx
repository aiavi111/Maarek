import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAAREK — Ресторан с панорамой Бишкека | 17 этаж",
  description:
    "Ресторан Maarek: стейки на углях, том-ям, авторские завтраки и панорама города с 17 этажа БЦ Россия. Халал. Доставка за 40–50 минут.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Maarek",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0a08",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans bg-shell">
        <Providers>
          {/* телефон: колонка 430px; ноутбук (≥1024px): во весь экран */}
          <div className="relative mx-auto w-full max-w-[430px] lg:max-w-none min-h-dvh bg-base sm:ring-1 sm:ring-line sm:shadow-[0_0_120px_-20px_rgba(201,162,87,0.15)] lg:ring-0 lg:shadow-none">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
