import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, TTodo } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['../../../app.component.less', './todo-form.component.less'],
})
@Injectable()
export class TodoFormComponent implements OnInit {
  form!: FormGroup;
  id: string | null = null;
  isTodoLoading = false;
  todo: TTodo | null = null;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
    });

    if (this.id) {
      this.getTodo(this.id);
    }
  }

  getTodo(id: string) {
    this.isTodoLoading = true;

    this.todoService
      .getTodo(id)
      .then((data) => {
        this.form.setValue({
          title: data.title,
          description: data.description,
          deadline: new Date(data.deadline).toISOString(),
        });
        this.todo = data;
      })
      .finally(() => (this.isTodoLoading = false));
  }

  goToTodo() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    const todo: TTodo = {
      id: this.id || new Date().getTime().toString(),
      title: this.form.value.title,
      description: this.form.value.description,
      deadline: this.form.value.deadline,
      isComplete: this.todo?.isComplete || false,
    };

    this.id ? this.todoService.editTodo(todo) : this.todoService.addTodo(todo);
    this.goToTodo();
  }
}
