import { Component, Input, OnInit } from '@angular/core';
import { TodoService, TTodo } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less'],
  animations: [],
})
export class TodoItemComponent implements OnInit {
  @Input('todoItem') todo!: TTodo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }
}
