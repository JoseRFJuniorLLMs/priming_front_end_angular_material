import { Course } from './student';

export interface CoursePage {
  courses: Course[];
  totalElements: number;
  totalPages?: number;
}
