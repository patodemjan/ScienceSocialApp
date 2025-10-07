import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './features/test/test.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // úvodná stránka s videom a kartami
  {
    path: 'test',
    loadComponent: () => import('./features/test/test.component').then(m => m.TestComponent)
  },
  
  
  { path: '**', redirectTo: '' } // fallback na home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
