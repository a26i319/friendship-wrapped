import type { ResultCard } from "@/types/results";

export const RESULT_INSIGHTS = {
  excellent: [
    {
      id: "insight-1",
      title: "Most Likely Activity",
      value: "Building unnecessary projects",
      description: "At 2 AM, probably coding",
      type: "insight" as const,
    },
    {
      id: "insight-2",
      title: "Website Verdict",
      value: "Peak overthinking energy",
      description: "But in a good way",
      type: "verdict" as const,
    },
  ],
  good: [
    {
      id: "insight-1",
      title: "Most Likely Activity",
      value: "Sending memes at random hours",
      description: "The friendship glue",
      type: "insight" as const,
    },
    {
      id: "insight-2",
      title: "Website Verdict",
      value: "Pretty solid person",
      description: "Would recommend knowing",
      type: "verdict" as const,
    },
  ],
  average: [
    {
      id: "insight-1",
      title: "Most Likely Activity",
      value: "Questioning life choices",
      description: "Relatable honestly",
      type: "insight" as const,
    },
    {
      id: "insight-2",
      title: "Website Verdict",
      value: "Mystery remains unsolved",
      description: "More data needed",
      type: "verdict" as const,
    },
  ],
};

export const getResultsByScore = (score: number, total: number): ResultCard[] => {
  const percentage = (score / total) * 100;

  const baseCards: ResultCard[] = [
    {
      id: "session",
      title: "Session Complete",
      value: "✨",
      description: "You actually made it through",
      type: "stat",
    },
    {
      id: "answered",
      title: "Questions Answered",
      value: `${score}/${total}`,
      description: "Accuracy level: suspicious",
      type: "stat",
    },
  ];

  if (percentage >= 80) {
    return [...baseCards, ...RESULT_INSIGHTS.excellent];
  } else if (percentage >= 60) {
    return [...baseCards, ...RESULT_INSIGHTS.good];
  } else {
    return [...baseCards, ...RESULT_INSIGHTS.average];
  }
};
