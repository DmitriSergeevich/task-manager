import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { opacityTrigger } from 'src/app/animations/opacity.animations';
import { TodoService, TTodo } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../../app.component.less', './todo.component.less'],
  animations: [opacityTrigger],
})
export class TodoComponent implements OnInit {
  todoItems!: TTodo[];

  form!: FormGroup;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoService.getTodoList().then((data) => {
      this.todoItems = data;
    });
  }

  goToCreatePage() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
