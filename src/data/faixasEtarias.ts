export const FAIXAS_ETARIAS = [
  "0 a 12 meses",
  "1 a 2 anos",
  "2 a 3 anos",
  "3 a 5 anos",
] as const;

export type FaixaEtaria = (typeof FAIXAS_ETARIAS)[number];

export const FAIXAS_POR_ATIVIDADE: Record<
  string,
  readonly FaixaEtaria[]
> = {
  A01: FAIXAS_ETARIAS,
  A02: FAIXAS_ETARIAS,
  A03: FAIXAS_ETARIAS,
  A04: ["0 a 12 meses", "1 a 2 anos", "2 a 3 anos"],
  A05: ["0 a 12 meses"],
  A06: ["0 a 12 meses"],
  A07: ["0 a 12 meses", "1 a 2 anos", "2 a 3 anos"],
  A08: FAIXAS_ETARIAS,
  A09: ["3 a 5 anos"],
  A11: ["3 a 5 anos"],
  A12: ["3 a 5 anos"],
  A13: ["3 a 5 anos"],
  A15: ["1 a 2 anos", "2 a 3 anos", "3 a 5 anos"],
  A16: ["1 a 2 anos", "2 a 3 anos"],
  A17: ["0 a 12 meses", "1 a 2 anos", "2 a 3 anos"],
  A19: ["0 a 12 meses"],
  A20: ["0 a 12 meses"],
  A23: ["1 a 2 anos", "2 a 3 anos"],
};
