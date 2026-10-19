export type Language = 'de' | 'pt';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverColor: string;
}

export interface PurchaseAlert {
  id: string;
  timeAgoDe: string;
  timeAgoPt: string;
  deviceDe: string;
  devicePt: string;
}
