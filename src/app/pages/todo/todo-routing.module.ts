import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    // children: [
    //   {
    //     path: 'create',
    //     component: TodoFormComponent,
    //   },
    // ],
  },
  {
    path: 'todo/create',
    component: TodoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
