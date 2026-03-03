import type { Metadata } from "next";
import "./globals.css";
import { withBasePath } from "./lib/basePath";

export const metadata: Metadata = {
  title: "Clínica B&C | Podólogo, Fisioterapeuta y Nutricionista en San José de la Rinconada",
  description: "Clínica multidisciplinar en San José de la Rinconada con servicios de podología, fisioterapia, nutrición, psicología y enfermería. Equipo de profesionales cualificados.",
  icons: {
    icon: withBasePath("/images/logo.png?v=20260303"),
    shortcut: withBasePath("/images/logo.png?v=20260303"),
    apple: withBasePath("/images/logo.png?v=20260303"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
