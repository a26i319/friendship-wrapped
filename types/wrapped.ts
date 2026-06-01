export interface WrappedCard {
  id: string;
  title: string;
  value?: string;
  description?: string;
  emoji?: string;
  type?: "stat" | "achievement" | "text";
}

export interface WrappedData {
  cards: WrappedCard[];
}
