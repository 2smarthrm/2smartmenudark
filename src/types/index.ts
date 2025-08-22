export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface ContentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  content: string;

  // Pode ser lista de strings OU grupos com { title, items }
  // (mantém o que já tens)
  features: any[];

  // NOVO (opcional): só aparece se definido
  cta?: CTA | CTA[];
}