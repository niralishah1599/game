import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { LastpageComponent } from './lastpage/lastpage.component';
import { Quiz2Component } from './quiz2/quiz2.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    QuizComponent,
    LastpageComponent,
    Quiz2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
