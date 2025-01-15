export interface Question {
  id: string;
  text: string;
  description: string;
  examples?: string[];
}

export interface Assessment {
  isPersonalData: boolean;
  isSensitive: boolean;
  reasons: string[];
}