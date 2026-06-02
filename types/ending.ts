export interface EndingMessage {
  id: string;
  text: string;
  delay: number;
}

export interface EndingContent {
  messages: EndingMessage[];
  footer: {
    version: string;
    closeText: string;
  };
}
