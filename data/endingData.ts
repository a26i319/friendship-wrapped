import type { EndingContent } from "@/types/ending";

export const ENDING_CONTENT: EndingContent = {
  messages: [
    {
      id: "1",
      text: "Thanks for making it this far.",
      delay: 0,
    },
    {
      id: "2",
      text: "This probably took longer to build than expected.",
      delay: 0.8,
    },
    {
      id: "3",
      text: "But it was genuinely fun building this.",
      delay: 1.6,
    },
    {
      id: "4",
      text: "Unnecessary project — Version 1 Complete.",
      delay: 2.4,
    },
    {
      id: "5",
      text: "See you in the next update.",
      delay: 3.2,
    },
  ],
  footer: {
    version: "v1.0",
    closeText: "Close",
  },
};
