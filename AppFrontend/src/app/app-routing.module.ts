import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mainpage',
    component: MainPageComponent,
    children: [
      { path: '', component: AboutUsComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent }

    ]
  },
    { path: 'create-profile', component: CreateProfileComponent }, // ✅ pridaj sem
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
