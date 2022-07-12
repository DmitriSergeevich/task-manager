import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.less'],
})
export class TodoViewComponent implements OnInit {
  id: string = '';
  title: string = '';
  description: string = '';
  deadline: string = '';
  isTodoLoading = false;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) this.getTodo();
  }

  goToTodo() {
    this.router.navigate(['/']);
  }

  getTodo() {
    this.isTodoLoading = true;
    this.todoService
      .getTodo(this.id)
      .then((data) => {
        this.title = data.title;
        this.description = data.description;
        this.deadline = data.deadline;
      })
      .finally(() => (this.isTodoLoading = false));
  }

  removeTodo() {
    this.todoService.removeTodo(this.id);
    this.goToTodo();
  }

  editTodo() {
    this.router.navigate(['edit/' + this.id]);
  }
}
