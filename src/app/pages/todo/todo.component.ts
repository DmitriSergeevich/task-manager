import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../../app.component.less', './todo.component.less'],
})
export class TodoComponent implements OnInit {
  todoItems = [
    {
      id: '1',
      title: 'First todo title',
      description: 'Description of first todo',
      deadline: '2014-12-10T08:02:17-05:00',
    },
    {
      id: '2',
      title: 'Second todo title',
      description: 'Description of second todo',
      deadline: '2014-08-01T08:02:17-05:00',
    },
    {
      id: '3',
      title: 'Third todo title',
      description: 'Description of third todo',
      deadline: '2014-10-08T08:02:17-05:00',
    },
  ];

  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.todoItems.push({
      id: new Date().getTime().toString(),
      title: this.form.value.title,
      description: this.form.value.description,
      deadline: this.form.value.deadline,
    });
  }
}
