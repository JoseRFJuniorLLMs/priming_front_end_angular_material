import { Course } from './course-collection';

export interface CoursePage {
  courses: Course[];
  totalElements: number;
  totalPages?: number;
}
