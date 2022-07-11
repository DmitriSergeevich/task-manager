import { Injectable } from '@angular/core';

export type TTodo = {
  id: string;
  title: string;
  description: string;
  deadline: string;
};
@Injectable()
export class TodoService {
  todoItems: TTodo[] = [
    {
      id: '1',
      title: 'First todo title',
      description: 'Description of first todo',
      deadline: '2022-07-12T08:02:17-05:00',
    },
    {
      id: '2',
      title: 'Second todo title',
      description: 'Description of second todo',
      deadline: '2022-07-15T08:02:17-05:00',
    },
    {
      id: '3',
      title: 'Third todo title',
      description: 'Description of third todo',
      deadline: '2014-10-08T08:02:17-05:00',
    },
    {
      id: '3',
      title: 'Fourth todo title',
      description: 'Description of fourth todo',
      deadline: '2022-07-13T08:02:17-05:00',
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
      }, 1000);
    });
  }

  addTodo(todo: TTodo) {
    this.todoItems.push(todo);
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

  removeTodo(id: string) {
    const index = this.todoItems.findIndex((item) => item.id === id);
    this.todoItems.splice(index, 1);
  }
}
