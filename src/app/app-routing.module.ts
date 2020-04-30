import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { LastpageComponent } from './lastpage/lastpage.component';



const routes: Routes = [
  {
    path:'firstpage',
    component:FirstPageComponent
  },
  {
    path:'quiz',
    component:QuizComponent
  },
  {
    path:'lastpage',
    component:LastpageComponent
  },
  {
    path:'',
    redirectTo:'firstpage',
    pathMatch:'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
