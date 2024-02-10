import { Student } from './student';

export interface StudentPage {
  courses: Student[];
  totalElements: number;
  totalPages?: number;
}
