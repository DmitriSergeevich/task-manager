import { Injectable } from '@angular/core';

export type TTodo = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  isComplete: boolean;
};
@Injectable()
export class TodoService {
  todoItems: TTodo[] = [
    {
      id: '1',
      title:
        'Заголовок настолько непотребной длины, что поражает воображение и обескураживает',
      description:
        'Не следует, однако забывать, что новая модель организационной деятельности требуют от нас анализа направлений прогрессивного развития. Задача организации, в особенности же консультация с широким активом влечет за собой процесс внедрения и модернизации новых предложений. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Равным образом новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития',
      deadline: '2022-07-12T08:02:17-05:00',
      isComplete: true,
    },
    {
      id: '2',
      title: 'Заголовок',
      description:
        'Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют от нас анализа дальнейших направлений развития. Разнообразный и богатый опыт рамки и место обучения кадров играет важную роль.',
      deadline: '2022-08-15T08:02:17-05:00',
      isComplete: false,
    },
    {
      id: '3',
      title: 'Заголовок здорового человека',
      description:
        'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений. Разнообразный и богатый опыт рамки и место обучения кадров требуют от нас анализа дальнейших направлений развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации.',
      deadline: '2022-07-13T08:02:17-05:00',
      isComplete: false,
    },
  ];

  constructor() {}

  getTodoList() {
    return new Promise<TTodo[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.todoItems);
      }, 1000);
    });
  }

  getTodo(id: string) {
    return new Promise<TTodo>((resolve, reject) => {
      setTimeout(() => {
        const todo = this.todoItems.find((item) => item.id === id);
        if (todo) {
          resolve(todo);
        } else {
          reject('Такой элемент не обнаружен');
        }
      }, 3000);
    });
  }

  addTodo(todo: TTodo) {
    this.todoItems.push({ ...todo, isComplete: false });
  }

  editTodo(todo: TTodo) {
    this.todoItems.map((item) => {
      if (item.id === todo.id) {
        item.deadline = todo.deadline;
        item.description = todo.description;
        item.title = todo.title;
      }
    });
  }

  setIsComplete(id: string, completeStatus: boolean) {
    this.todoItems.map((item) => {
      if (item.id === id) {
        item.isComplete = completeStatus;
      }
    });
  }

  removeTodo(id: string) {
    const index = this.todoItems.findIndex((item) => item.id === id);
    this.todoItems.splice(index, 1);
  }
}
