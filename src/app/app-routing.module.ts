import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './features/test/test.component'; // import komponentu

const routes: Routes = [
  { path: 'test', component: TestComponent },       // cesta k test komponentu
  { path: '', redirectTo: 'test', pathMatch: 'full' } // presmerovanie na test pri prázdnej URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
