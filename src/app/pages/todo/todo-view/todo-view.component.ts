import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.less'],
})
export class TodoViewComponent implements OnInit {
  id: string | null = null;
  title: string | null = null;
  description: string | null = null;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id)
      this.todoService.getTodo(this.id).then((data) => {
        this.title = data.title;
        this.description = data.description;
      });
  }

  goToTodo() {
    this.router.navigate(['/']);
  }
}
