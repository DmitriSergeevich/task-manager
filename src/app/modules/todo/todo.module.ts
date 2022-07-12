import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from 'src/app/todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DeadlineDirective } from 'src/app/directives/deadline.directive';
import { RuDatePipe } from 'src/app/pipes/ruDate.pipe';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { CutTextPipe } from 'src/app/pipes/cutText.pipe';

@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoItemComponent,
    DeadlineDirective,
    RuDatePipe,
    TodoViewComponent,
    CutTextPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    MaterialModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
