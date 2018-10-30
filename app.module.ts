import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveAppComponent } from './app-reactive.component';
import { TemplateAppComponent } from './app-template.component';

@NgModule({
  declarations: [AppComponent, ReactiveAppComponent, TemplateAppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
