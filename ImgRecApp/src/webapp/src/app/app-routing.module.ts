import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { UploadComponent } from './components/upload/upload.component';
import { CompareComponent } from './components/compare/compare.component';

const routes: Routes = [ 
  {path: 'upload',component: UploadComponent},
  {path: 'compare',component: CompareComponent},
  {path: 'contact',component: ContactComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'upload'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
