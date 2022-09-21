import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksPageComponent } from './pages/all-books-page/all-books-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';

const routes: Routes = [
  { path: '', component: AllBooksPageComponent },
  { path: "add", component: AddPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
