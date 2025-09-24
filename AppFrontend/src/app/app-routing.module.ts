import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './features/test/test.component';

const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./features/test/test.component').then(m => m.TestComponent)
  },
  { path: '', redirectTo: 'test', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
