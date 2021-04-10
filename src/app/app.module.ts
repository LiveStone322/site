import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScullyLibModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
