import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//git push firt commit
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, AppRoutingModule)
  ]
}).catch(err => console.error(err));

