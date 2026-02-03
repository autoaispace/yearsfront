export interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export enum SlideType {
  INTRO = 'INTRO',
  WORK = 'WORK',
  GROWTH = 'GROWTH',
  FUTURE = 'FUTURE',
  CLOSING = 'CLOSING'
}

export interface TechStackItem {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Mobile';
}

export interface ProjectItem {
  title: string;
  role: string;
  period: string;
  tech: string[];
  desc: string;
}
