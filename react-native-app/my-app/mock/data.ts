export interface IQuestionsAnswers {
  id: number;
  title: string;
}

export interface IQuestions {
  id: number;
  title: string;
  answers: IQuestionsAnswers[];
  correctAnswer: number;
}

const questions: IQuestions[] = [
  {
    id: 1,
    title: 'What is this?',
    answers: [
      { id: 1, title: 'This is book 1' },
      { id: 2, title: 'This is book 2' },
      { id: 3, title: 'This is book 3' },
      { id: 4, title: 'This is book 4' },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    title: 'Book is ?',
    answers: [
      { id: 1, title: 'Book 1' },
      { id: 2, title: 'Book 2' },
      { id: 3, title: 'Book 3' },
      { id: 4, title: 'Book 4' },
    ],
    correctAnswer: 4,
  },
];

export default questions;
