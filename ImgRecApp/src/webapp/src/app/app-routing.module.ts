import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { UploadComponent } from './components/upload/upload.component';
import { CompareComponent } from './components/compare/compare.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  {path: 'home',component: HomeComponent, data:{animation: 'fade'}},
  {path: 'upload',component: UploadComponent, data:{animation: 'isLeft'}},
  {path: 'compare',component: CompareComponent},
  {path: 'contact',component: ContactComponent, data:{animation: 'isRight'}},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
