import { LessonCollection } from './lesson-collection';

export interface Course {
  _id: string;
  name: string;
  objective: string;
  content?: LessonCollection[];
  lessons?: LessonCollection[];
  category: string;
}
