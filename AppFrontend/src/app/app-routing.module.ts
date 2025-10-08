import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // hlavná stránka
  { path: 'visit-us', component: HomeComponent }, // placeholder
  { path: 'create-profile', component: HomeComponent }, // placeholder
  { path: '**', redirectTo: '' } // všetky neznáme cesty presmerovať na Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
