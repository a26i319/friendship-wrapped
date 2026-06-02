import type { QuizQuestion } from "@/types/quiz";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "1",
    question: "What am I probably doing at 2 AM?",
    options: [
      { id: "a", text: "Sleeping peacefully" },
      { id: "b", text: "Coding something unnecessary" },
      { id: "c", text: "Gym montage arc" },
      { id: "d", text: "Questioning my existence" },
    ],
    correctAnswerId: "b",
  },
  {
    id: "2",
    question: "If my battery is 1%, what will I still do?",
    options: [
      { id: "a", text: "Sleep" },
      { id: "b", text: "Open one more tab" },
      { id: "c", text: "Send memes" },
      { id: "d", text: "Say 'it's fine'" },
    ],
    correctAnswerId: "b",
  },
  {
    id: "3",
    question: "What is my hidden passive ability?",
    options: [
      { id: "a", text: "Professional yapping" },
      { id: "b", text: "Appearing online instantly" },
      { id: "c", text: "Spending too much time on random projects" },
      { id: "d", text: "Unlocking bugs nobody asked for" },
    ],
    correctAnswerId: "c",
  },
  {
    id: "4",
    question: "If I become a game character, my stats are:",
    options: [
      { id: "a", text: "Strength 100 / Social 2" },
      { id: "b", text: "Intelligence 50 / Luck 1" },
      { id: "c", text: "Gym 90 / Sleep 10" },
      { id: "d", text: "Confusion 999" },
    ],
    correctAnswerId: "c",
  },
  {
    id: "5",
    question: "What is my strongest skill?",
    options: [
      { id: "a", text: "Coding" },
      { id: "b", text: "Overthinking" },
      { id: "c", text: "Making unnecessary projects" },
      { id: "d", text: "All of the above" },
    ],
    correctAnswerId: "d",
  },
  {
    id: "6",
    question: "Which one feels most like me?" ,
    options: [
      { id: "a", text: "I'll do it tomorrow" },
      { id: "b", text: "How did I end up here" },
      { id: "c", text: "Just one more minute" },
      { id: "d", text: "All of the above" },
    ],
    correctAnswerId: "d",
  },
  {
    id: "7",
    question: "How many hours do you think this stupid website took?",
    options: [
      { id: "a", text: "20 minutes" },
      { id: "b", text: "2 hours" },
      { id: "c", text: "Too long" },
      { id: "d", text: "Please don't ask" },
    ],
    correctAnswerId: "c",
  },
];

export const CORRECT_FEEDBACK = [
  "Okay you actually know me",
  "Suspiciously accurate",
  "Wow, you got that right? Impressive.",
  "You're scary accurate 👀",
  "Literally why are you so right",
  "That's it. You win.",
  "I feel so seen right now",
];

export const WRONG_FEEDBACK = [
  "Interesting choice 😭",
  "That is definitely... an answer",
  "Certified questionable decision",
  "Did you even try?",
  "Not this one chief",
  "Nope, try again! ",
  "Absolutely not",
];
