import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const publicUrl = "https://atividades.fonosuite.com";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: "Atividades educativas para linguagem | Sônia Torres",
  description:
    "Atividades educativas e lúdicas organizadas por faixa etária e tipo de interação para consulta de famílias e profissionais.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: publicUrl,
    siteName: "Sônia Torres",
    title: "Atividades educativas para linguagem | Sônia Torres",
    description:
      "Atividades educativas e lúdicas organizadas por faixa etária e tipo de interação para consulta de famílias e profissionais.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
