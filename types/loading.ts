export interface LoadingStep {
  id: string;
  message: string;
}

export type LoadingPhase = "initializing" | "loading" | "preparing" | "complete";
