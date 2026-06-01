export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswerId: string;
  isCorrect: boolean;
}
