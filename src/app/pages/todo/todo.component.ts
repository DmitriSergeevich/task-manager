import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService, TTodo } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../../app.component.less', './todo.component.less'],
})
export class TodoComponent implements OnInit {
  todoItems!: TTodo[];

  form!: FormGroup;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodoList().then((data) => {
      this.todoItems = data;
    });
    // this.form = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   description: new FormControl('', Validators.required),
    //   deadline: new FormControl('', Validators.required),
    // });
  }
  // onSubmit() {
  //   this.todoItems.push({
  //     id: new Date().getTime().toString(),
  //     title: this.form.value.title,
  //     description: this.form.value.description,
  //     deadline: this.form.value.deadline,
  //   });
  // }
}
