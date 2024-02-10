import { Course } from '../model/couse/course-collection';
import { CoursePage } from '../model/couse/course-page';

export const coursesMock: Course[] = [
  {
    _id: '1',
    name: 'Angular',
    category: 'front-end',
    lessons: [
      {
        _id: '1',
        name: 'Angular 1',
        youtubeUrl: '2OHbjep_WjQ'
      }
    ]
  },
  {
    _id: '2',
    name: 'Java',
    category: 'back-end',
    lessons: [
      {
        _id: '2',
        name: 'Java 1',
        youtubeUrl: '2OHbyep_WjQ'
      }
    ]
  }
];

export const coursesPageMock: CoursePage = {
  courses: coursesMock,
  totalElements: 2,
  totalPages: 1
};
