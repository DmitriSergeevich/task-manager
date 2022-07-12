import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService, TTodo } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less'],
  animations: [],
})
export class TodoItemComponent implements OnInit {
  @Input('todoItem') todo!: TTodo;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }

  editTodo(id: string) {
    this.router.navigate(['edit/' + id]);
  }

  setCompleteTodo() {
    console.log('status');

    this.todoService.setIsComplete(this.todo.id, !this.todo.isComplete);
  }
}
