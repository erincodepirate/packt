import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'admin',
    loadChildren: () => import('@packt/admin').then(m =>
      m.AdminModule)
  },
  {
    path: 'tour', 
    loadChildren: () => import('@packt/visitor').then(m => 
      m.VisitorModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'tour'
  }
]
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
