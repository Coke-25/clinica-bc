import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Clínica B&C | Podólogo, Fisioterapeuta y Nutricionista en San José de la Rinconada",
  description: "Clínica multidisciplinar en San José de la Rinconada con servicios de podología, fisioterapia, nutrición, psicología y enfermería. Equipo de profesionales cualificados.",
  icons: {
    icon: "/images/logo.png?v=20260303",
    shortcut: "/images/logo.png?v=20260303",
    apple: "/images/logo.png?v=20260303",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
