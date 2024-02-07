import { Lesson } from './lesson-collection';

export interface Course {
  _id: string;
  name: string;
  objective: string;
  content?: Lesson[];
  lessons?: Lesson[];
  category: string;
}
