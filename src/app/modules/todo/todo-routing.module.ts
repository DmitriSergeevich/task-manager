import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  {
    path: 'create',
    component: TodoFormComponent,
  },
  {
    path: 'edit/:id',
    component: TodoFormComponent,
  },
  {
    path: ':id',
    component: TodoViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
