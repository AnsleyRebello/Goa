import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { InfoComponent } from './MyComponents/info/info.component';

export const routes: Routes = [
  { path: 'home', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: InfoComponent },
];
