import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [TodoComponent, TodoFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    MaterialModule,
  ],
  providers: [],
})
export class TodoModule {}
