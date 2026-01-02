export type Mood = "happy" | "calm" | "excited" | "thoughtful";

export interface Diary {
  id: string;
  title: string;
  slug: string;
  date: string;
  mood?: Mood;
  excerpt: string;
  content: string;
}

