export interface ResultCard {
  id: string;
  title: string;
  value?: string;
  description?: string;
  type: "stat" | "insight" | "verdict";
}

export interface ResultsData {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  cards: ResultCard[];
}
